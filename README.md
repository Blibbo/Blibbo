This repo is my playground and it is a work in progress. It is currently public because it's convenient for me right now.

Phone build:
- capacitor
``` 
./build static -prod -android -noserver -capacitor
```
- tauri static
```
./build static -prod -android -noserver -tauri
```
- tauri dev
```
./build -android -tauri -noserver
```

Pages:
```
./build static -prod -pages -noserver -noapi
```

-NoApi builds don't even try to connect to the api, the flag is meant for offline builds.
Their function is to avoid flooding the console with errors in builds where the api isn't expected to be online.
There are also UI changes though.