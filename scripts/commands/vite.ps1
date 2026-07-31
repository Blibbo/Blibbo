npm run vite:build

$pfx = $Env:VITE_ENV
Remove-Item -ErrorAction Ignore -Recurse "./build/$pfx/old"
Rename-Item -ErrorAction Ignore "./build/$pfx/current" old
Rename-Item "./build/$pfx/next" current
