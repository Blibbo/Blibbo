package main

import (
	"log"
	"log/slog"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"

	"backend/internal/api"
	"backend/internal/dev"
)

func main() {
	dev.Config()

	app := fiber.New(fiber.Config{
		ProxyHeader: fiber.HeaderXForwardedFor,
	})

	apiRouter := app.Group("/api")
	api.Register(apiRouter)
	dev.RegisterReloadRoute(apiRouter)

	app.Use(compress.New())

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		// AllowHeaders: "Origin, Content-Type, Accept",
	}))

	var port string
	if dev.BuildType() == dev.BuildHMR {
		port = dev.GetPortEnv("PORT_GO_DEV")

		dev.TriggerViteHMR()
	} else {
		port = dev.GetPortEnv("VITE_GO_PORT")

		registerStatic(app)

		if dev.BuildType() != dev.BuildStatic {
			dev.BuildWatchFrontend()
		}
		slog.Info("Serving ./build")
	}

	log.Fatal(app.Listen(":" + port))
}

func registerStatic(app *fiber.App) {
	app.Static("/", "../build/"+string(dev.EnvMode())+"/current")

	app.Get("*", func(c *fiber.Ctx) error {
		return c.SendFile("../build/" + string(dev.EnvMode()) + "/current/index.html")
	})
}
