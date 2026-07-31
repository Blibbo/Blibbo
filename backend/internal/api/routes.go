package api

import (
	"github.com/gofiber/fiber/v2"
)

func Register(api fiber.Router) {

	api.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "Online"})
	})

}
