package dev

import (
	"log/slog"
	"os"
	"os/exec"
	"sync"
	"time"

	"github.com/fasthttp/websocket"
	"github.com/fsnotify/fsnotify"
	"github.com/gofiber/fiber/v2"
	fiberws "github.com/gofiber/websocket/v2"
)

var reloadClients = make(map[*fiberws.Conn]struct{})
var reloadClientsMu sync.Mutex

func TriggerViteHMR() {
	slog.Debug("Triggering the vite project's rebuild.")
	now := time.Now()
	err := os.Chtimes("../src/lib/api.ts", now, now)
	if err != nil {
		panic(err)
	}
}

func registerReloadClient(conn *fiberws.Conn) {
	if BuildType() != BuildReload {
		return
	}
	reloadClientsMu.Lock()
	reloadClients[conn] = struct{}{}
	reloadClientsMu.Unlock()
}

func unregisterReloadClient(conn *fiberws.Conn) {
	if BuildType() != BuildReload {
		return
	}
	reloadClientsMu.Lock()
	delete(reloadClients, conn)
	reloadClientsMu.Unlock()
	conn.Close()
}

// hot reload for DEV
func RegisterReloadRoute(api fiber.Router) {
	if BuildType() != BuildReload {
		return
	}

	// watchBuildAndReload()

	// if the server process re-runs (air), tell the clients to reload
	api.Get("/__livereload", fiberws.New(func(c *fiberws.Conn) {
		registerReloadClient(c)
		defer unregisterReloadClient(c)

		for { // keep the connection alive
			if os.Getenv("VITE_CLIENT_MUST_PING") == "1" {
				// keep connection alive through reading
				for {
					if _, _, err := c.ReadMessage(); err != nil {
						return
					}
				}
			} else {
				// keep connection alive through writing
				if err := c.WriteMessage(websocket.TextMessage, []byte("ping")); err != nil {
					return
				}
				time.Sleep(time.Second)
			}
		}
	}))
}

func broadcastReload() {

	reloadClientsMu.Lock()
	defer reloadClientsMu.Unlock()

	for c := range reloadClients {
		Trace("sending reload message to ", "client", c)
		_ = c.WriteMessage(websocket.TextMessage, []byte("reload"))
	}

}

func BuildWatchFrontend() {
	WatchPathsFull(
		func(e fsnotify.Event) {
			slog.Info("Rebuilding frontend")
			cmd := exec.Command("npm", "run", "build")
			// cmd.Dir =
			cmd.Stdout = os.Stdout
			cmd.Stderr = os.Stderr
			cmd.Stdin = os.Stdin

			err := cmd.Run()
			if err != nil {
				slog.Error("Build failed:", "err", err)
			}

			if BuildType() == BuildReload {
				broadcastReload()
			}
		},
		"../src",
		"../static",
		"../svelte.config.js",
		"../tsconfig.json",
		"../vite.config.js",
		"../shared/"+string(EnvMode())+".json",
	)
}
