package msys2

import (
	"blibbo/automation/scoop"
	"fmt"
)

func install() error {

	if err := scoop.Install(); err != nil {
		return fmt.Errorf("Couldn't install msys2: %w", err)
	}

	return nil
}
