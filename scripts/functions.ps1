$varsToSet = @{}

function Set-Var{
  param(
    [Parameter(Mandatory=$true)]
    [string]$name,
    [Parameter(Mandatory=$true)]
    [string]$value
  )

  Invoke-Expression "`$Env:$name = '$value'"
  $varsToSet[$name] = $value
}

function Import-EnvCustom{
  param(
    [Parameter(Mandatory=$true)]
    [string]$envFile
  )
  Resolve-Path $envFile | Out-Null

  # Read each line, ignore comments and empty lines
  Get-Content $envFile | ForEach-Object {
    if ($_ -and $_ -notmatch '^\s*#') {
      $parts = $_ -split '=', 2
      if ($parts.Count -eq 2) {
        $name = $parts[0].Trim()
        $value = $parts[1].Trim()
        Set-Var $name $value
      }
    }
  }
}

function tab {

  $escapedArgs = foreach ($arg in $args) {
    $arg -replace ';', '\;'
  }

  $variablesCommand = ""

  foreach($name in $varsToSet.Keys){
    $variablesCommand += "`$Env:$name = '$($varsToSet[$name])';"
  }

  $variablesCommand = $variablesCommand -replace ';', '\;'

  if(!$variablesCommand -and !$args){
    & wtp.lnk pwsh -wd $pwd
  } else {
    & wtp.lnk pwsh -NoExit -wd $pwd -c $variablesCommand @escapedArgs
  }
}