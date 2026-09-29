package msys2

import (
	"blibbo/automation/scoop"
	"fmt"
	"os/exec"
)

func install() error {

	if err := scoop.Install(); err != nil {
		return fmt.Errorf("Couldn't install msys2: %w", err)
	}

	// win.Shell("powershell")
	exec.Command("powershell").Run()

	return nil
}
