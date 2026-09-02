//go:build !windows

package msys2

import "errors"

func install() error {
	return errors.New("MSYS2 installation is only supported on Windows")
}
