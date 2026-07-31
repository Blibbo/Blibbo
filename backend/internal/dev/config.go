package dev

import (
	"encoding/json"
	"log/slog"
	"os"
	"sync"

	"github.com/fsnotify/fsnotify"
)

type configType struct {
	LOG_LEVEL string
}

var (
	globalConfig     configType
	globalConfigLock sync.RWMutex
	globalConfigOnce sync.Once
)

func configPath() string {
	return "../shared/" + string(EnvMode()) + ".json"
}

func Config() configType {
	globalConfigOnce.Do(func() {
		reloadGlobalConfig()

		// reload the log level
		if BuildType() != BuildStatic {
			watchConfig()
		}
	})

	if BuildType() == BuildHMR {
		globalConfigLock.RLock()
		defer globalConfigLock.RUnlock()
	}

	return globalConfig
}

func reloadGlobalConfig() {
	config := loadFromDisk()

	globalConfigLock.Lock()
	globalConfig = config
	globalConfigLock.Unlock()

	var logLevel slog.Level
	if !Try(func() {
		logLevel = ConvertLogLevel(config.LOG_LEVEL)
	}) {
		logLevel = slog.LevelInfo
		slog.Error("Misconfigured log level in config file", "LOG_LEVEL", config.LOG_LEVEL, "env", EnvMode())
	}

	LevelVar().Set(logLevel)
	slog.Debug("Reloaded config.")
}

func loadFromDisk() configType {
	file := configPath()
	data, err := os.ReadFile(file)
	if err != nil {
		panic(err)
	}

	var config configType
	if err := json.Unmarshal(data, &config); err != nil {
		panic(err)
	}

	return config
}

func watchConfig() {
	WatchWrite(configPath(), func(e fsnotify.Event) {
		reloadGlobalConfig()
	})
}
