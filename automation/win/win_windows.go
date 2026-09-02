package win

import (
	"fmt"
	"strings"

	"golang.org/x/sys/windows"
)

func ShellExecute(args ...string) error {
	if len(args) == 0 {
		return fmt.Errorf("no executable specified")
	}

	file, err := windows.UTF16PtrFromString(args[0])
	if err != nil {
		return fmt.Errorf("couldn't encode executable path: %w", err)
	}

	verb, err := windows.UTF16PtrFromString("open")
	if err != nil {
		return fmt.Errorf("couldn't encode shell verb: %w", err)
	}

	var params *uint16
	if len(args) > 1 {
		p, err := windows.UTF16PtrFromString(strings.Join(args[1:], " "))
		if err != nil {
			return fmt.Errorf("couldn't encode arguments: %w", err)
		}
		params = p
	}

	if err := windows.ShellExecute(
		0,      // hwnd
		verb,   // "open"
		file,   // executable
		params, // arguments
		nil,    // current directory
		1,      // SW_SHOWNORMAL
	); err != nil {
		return fmt.Errorf("couldn't launch %q: %w", args[0], err)
	}

	return nil
}
