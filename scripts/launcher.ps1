param(
  [switch]$Prod,
  [string]$Option = 'hmr',
  [switch]$EnvOnly,
  [switch]$Tauri,
  [switch]$Android,
  [switch]$NoServer,
  [switch]$Pages,
  [switch]$NoApi,
  [switch]$Capacitor
)

enum Commands{
  vite = 1
}

enum BuildType{
  static = 1 # normal, not changing a thing
  watch # save = rebuild
  reload # save = page reloads for everyone
  hmr # magic.
}

enum LogLevel{
  trace = 1
  debug
  info
  warn
  error
}

try{
  $command = [Commands]$Option
}catch{
  $command = $null
}
try{
  $build = [BuildType]$Option
}catch{
  $build = $null
}

if(!$command -and !$build){
  Write-Error -ErrorAction Stop "Unknown option $Option."
}

. ./scripts/functions



if($command){
  $commandLocation = Resolve-Path -ErrorAction Stop "./scripts/commands/$command.ps1"

  & $commandLocation.Path
} elseif ($build) {

  Set-Var RUN_FROM_POWERSHELL 1
  Set-Var VITE_LOG_LEVEL ([string][LogLevel]::debug)

  if(!$Prod){
    Import-EnvCustom ./.env
    Set-Var VITE_ENV development
  } else {
    Import-EnvCustom ./.env.production
    Set-Var VITE_ENV production
  }

  if($NoApi){
    Set-Var VITE_NO_API 1
  }

  # dev config
  if($build -ne ([BuildType]::static) -and $build -ne ([BuildType]::watch)){
    # verify bug:
    <#
      if the server is the one who pings,
      saving a file and refreshing the process means losing the websocket
      which might not be a problem if the client pings
      and might stop vite rebuild refreshes if the server pings.
    #>
    Set-Var VITE_CLIENT_MUST_PING 1
  }

  Set-Var VITE_BUILD ([string]$build)

  if($Tauri){
    ./scripts/taurienv.ps1
  }

  if($EnvOnly){return}

  # start servers
  switch($build){
    ([BuildType]::static){

      if($Tauri){
        npm run tauri:build

        if($Android -and !$Capacitor){
          npm run tauri android build -- --debug
          adb install src-tauri/gen/android/app/build/outputs/apk/universal/debug/app-universal-debug.apk
          adb shell monkey -p com.blibbo -c android.intent.category.LAUNCHER 1
        }
      }else{
        npm run build
        if($LASTEXITCODE -ne 0){
          exit
        }
      }

      if($Pages){
        if(!$Prod){
          TError Pages release must be done in a prod environment.
        }

        if(!$NoApi){
          TError "Pages build requires the `-NoApi flag so that the frontend doesn't even try to connect to the api."
        }

        $pagesRepositoryLocation = "$HOME/Repositories/blibbo.github.io"
        if(Test-IsGitRepo $pagesRepositoryLocation){
          $keep = @(
            '.nojekyll'
            '.git'
            'README.md'
            'LICENSE'
          )
          Get-ChildItem $pagesRepositoryLocation | ForEach-Object {
            if($_.Name -notin $keep){
              Remove-Item -Recurse $_
            }
          }
          Copy-Item -Recurse -Force ./build/production/current/* $pagesRepositoryLocation
          Copy-Item -Force ./build/production/current/index.html "$pagesRepositoryLocation/404.html"
          Sync-GitRepo $pagesRepositoryLocation
        }
      }

      if($Android -and $Capacitor){
        npx cap sync android
        Invoke-Inlocation ./android {
          # adb uninstall com.blibbo
          ./gradlew installDebug
          npx cap run android
          adb shell monkey -p com.blibbo -c android.intent.category.LAUNCHER 1
        }
      }

      if(!$NoServer){
        npm run backend:build
        tab npm run backend:serve
      }
    }
    ([BuildType]::watch){
      npm run build
      if($LASTEXITCODE -ne 0){
        exit
      }
      tab npm run backend:dev
    }
    ([BuildType]::reload){
      npm run build
      if($LASTEXITCODE -ne 0){
        exit
      }
      tab npm run backend:dev
    }
    ([BuildType]::hmr){
      if(!$NoServer){
        tab npm run backend:dev
      }

      if($Android -and $Tauri){
        tab npm run tauri android dev
      }elseif($Tauri){
        tab npm run tauri:dev
      } else {
        tab npm run dev
      }

      if(!$NoServer){
        tab npm run backend:proxydev
      }
    }
  }

  $sleep = 4

  if(!$NoServer){
    if(!$Prod){
      Start-Sleep $sleep

      Start-Process "http://$($Env:VITE_API):$($Env:VITE_GO_PORT)"

    } else {
      tab Start-Ngrok $Env:VITE_GO_PORT
      Start-Sleep $sleep

      Start-Process "https://$($Env:VITE_API)"
    }
  }
}