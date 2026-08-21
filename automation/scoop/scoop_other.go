//go:build !windows

package scoop

import "errors"

func installScoop() error {
	return errors.New("Scoop installation is only supported on Windows")
}
