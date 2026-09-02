//go:build !windows

package scoop

import "errors"

func install() error {
	return errors.New("Scoop installation is only supported on Windows")
}
