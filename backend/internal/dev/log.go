package dev

import (
	"context"
	"log/slog"
	"os"
	"sync"

	"github.com/jba/slog/handlers/loghandler"
)

var (
	registerOnce sync.Once
	logLevel     = &slog.LevelVar{} // INFO
)

const (
	LevelTrace slog.Level = -8
	LevelFatal slog.Level = 12
)

func Trace(msg string, args ...any) {
	slog.Log(context.Background(), LevelTrace, msg, args...)
}

func Fatal(msg string, args ...any) {
	slog.Log(context.Background(), LevelFatal, msg, args...)
	os.Exit(1)
}

func ConvertLogLevel(raw string) slog.Level {

	switch raw {
	case "trace":
		return LevelTrace
	case "debug":
		return slog.LevelDebug
	case "info":
		return slog.LevelInfo
	case "warn":
		return slog.LevelWarn
	case "error":
		return slog.LevelError
	case "fatal":
		return LevelFatal
	default:
		panic("LOG_LEVEL " + raw + " is not valid.")
	}
}

func LevelVar() *slog.LevelVar {
	registerOnce.Do(func() {

		slog.SetDefault(slog.New(loghandler.New(os.Stdout, &slog.HandlerOptions{
			Level: logLevel,
		})))

	})

	return logLevel
}
