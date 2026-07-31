
$environment = $Env:VITE_ENV
$isProd = $environment -eq 'production'

$devPort = $Env:PORT_VITE

$hostname = $Env:VITE_API
if(!$isProd){
  $hostname += ":$devPort"
}

$protocol = $isProd ? 'https' : 'http'

$hostname = $protocol + '://' + $hostname

$build = $Env:VITE_BUILD


$packageName = Ternary ($Android -and $build -eq 'hmr') 'com.blibbo.hmr' 'com.blibbo'
Build-Template ./src-tauri/tauri-template.conf.json ./src-tauri/tauri.conf.json

if($Android){

  # gitignore shenanigans

  $genDir = 'src-tauri/gen/android'
  $gitKeep = @(
    'MainActivity-template.kt'
    'app/src/main/res/values/themes.xml'
    'app/src/main/res/values-night/themes.xml'
  )

  EnsureGitignoredDirectoryWithExceptions $genDir $keep ./.gitignore

  # check cache for last package name to see if rebuild is necessary

  $oldPackageNameFileLocation = './src-tauri/gen/android/last-package-name'
  $oldPackageName = $null
  if(Test-Path $oldPackageNameFileLocation){
    $oldPackageName = Get-Content $oldPackageNameFileLocation
  }

  $generatedAndroidProjectLocation = NormalizePath $genDir
  $gradleProjectExists = Test-Path $generatedAndroidProjectLocation
  $nameChanged = $oldPackageName -ne $packageName

  # set cache

  if($nameChanged){
    Set-Content $oldPackageNameFileLocation $packageName -NoNewLine
  }

  # delete android project

  $keep = $gitKeep + @(
    'last-package-name'
  )

  $keepFull = $keep | ForEach-Object {NormalizePath (Join-Path $genDir $_)}
  if($gradleProjectExists -and $nameChanged){
    Get-ChildItem $generatedAndroidProjectLocation -Recurse | ForEach-Object {
      $mustDelete = $true
      foreach($toKeep in $keepFull){
        if($toKeep -like "$($_.FullName)*"){
          $mustDelete = $false
        }
      }

      if($mustDelete){
        Remove-Item -Force -Recurse $_
      }
    }
  }

  # build the main activity template

  $mainTemplateLocation = Join-Path $generatedAndroidProjectLocation MainActivity-template.kt
  $mainParentLocation = Join-Path $generatedAndroidProjectLocation app/src/main/java/com/blibbo
  if($build -eq 'hmr'){
    $mainParentLocation = Join-Path $mainParentLocation hmr
  }
  $mainLocation = Join-Path $mainParentLocation MainActivity.kt
  Build-Template $mainTemplateLocation $mainLocation

  # rebuild android project

  if(!$gradleProjectExists -or ($gradleProjectExists -and $nameChanged)){
    npm run tauri android init
  }

}