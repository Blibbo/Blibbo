package msys2

import (
	"blibbo/automation/scoop"
	"blibbo/automation/win"
	"fmt"
)

func install() error {

	if err := scoop.Install(); err != nil {
		return fmt.Errorf("Couldn't install msys2: %w", err)
	}

	win.ShellAsync("outargv", "hello", "world", "hello world")
	win.Shell("outargv", "hello", "world", "hello world")

	// win.Shell("powershell", "-C", "Start-Sleep 3")
	// exec.Command("powershell", "-C", "Start-Sleep 3").Run()
	// exec.Command("wt").Run()

	return nil
}
