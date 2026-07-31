package dev

import (
	"os"
	"strconv"
	"sync"

	"github.com/joho/godotenv"
)

type envModeType string
type buildTypeType string

var (
	envMode         envModeType
	envModeOnce     sync.Once
	buildType       buildTypeType
	buildTypeOnce   sync.Once
	registerEnvOnce sync.Once
	isAirOnce       sync.Once
	isAir           bool
)

const (
	EnvProd     envModeType   = "production"
	EnvDev      envModeType   = "development"
	BuildStatic buildTypeType = "static"
	BuildWatch  buildTypeType = "watch"
	BuildReload buildTypeType = "reload"
	BuildHMR    buildTypeType = "hmr"
)

func EnvMode() envModeType {
	envModeOnce.Do(func() {
		env := os.Getenv("VITE_ENV")

		switch env {
		case "development", "production":
			envMode = envModeType(env)
		default:
			panic("invalid VITE_ENV: " + env)
		}
	})

	return envMode
}

func IsProd() bool {
	return envMode == EnvProd
}

func BuildType() buildTypeType {
	buildTypeOnce.Do(func() {
		env := os.Getenv("VITE_BUILD")

		switch env {
		case "static", "watch", "reload", "hmr":
			buildType = buildTypeType(env)
		default:
			panic("invalid VITE_BUILD: " + env)
		}
	})

	return buildType
}

func IsAir() bool {
	isAirOnce.Do(func() {
		isAir = os.Getenv("AIR_RUN") == "1"
	})

	return isAir
}

func registerEnv() {
	registerEnvOnce.Do(func() {
		var err error

		if IsProd() {
			err = godotenv.Load("../.env.production")
		} else {
			err = godotenv.Load("../.env")
		}
		if err != nil {
			panic("Error loading .env file: " + err.Error())
		}
	})
}

func GetPortEnv(portVar string) string {
	registerEnv()
	port := os.Getenv(portVar)

	if port == "" {
		panic(portVar + " environment variable is required")
	}

	portNum, err := strconv.Atoi(port)
	if err != nil || portNum < 1 || portNum > 65535 {
		panic(portVar + " must be a valid number between 1 and 65535")
	}
	return port
}

// func isRunningFromTmp() (bool, error) {
// 	exePath, err := os.Executable()
// 	if err != nil {
// 		return false, err
// 	}

// 	exePath, err = filepath.EvalSymlinks(exePath)
// 	if err != nil {
// 		return false, err
// 	}

// 	dir := filepath.Base(filepath.Dir(exePath))
// 	return dir == "tmp", nil
// }
