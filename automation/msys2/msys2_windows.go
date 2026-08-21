package msys2

import (
	"fmt"
	"os/exec"
)

func installMSYS2() error {

	if err := exec.Command("wt").Run(); err != nil {
		return fmt.Errorf("Running command failed: %w", err)
	}

	return nil
}
