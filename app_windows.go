//go:build windows && !server

package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
)

type InstallMSYS2Service struct{}

// InstallMSYS2 installs (or updates) MSYS2. Windows-only implementation.
func (i *InstallMSYS2Service) InstallMSYS2() error {
	// sysDrive := os.Getenv("SystemDrive") // e.g. "C:"
	// msysPath := filepath.Join(sysDrive+`\`, "msys64")

	// if _, err := os.Stat(msysPath); os.IsNotExist(err) {
	// 	downloadPath := filepath.Join(os.Getenv("HOME"), "Downloads", "msys2.exe")

	// 	if err := downloadFile(
	// 		"https://github.com/msys2/msys2-installer/releases/download/nightly-x86_64/msys2-base-x86_64-latest.sfx.exe",
	// 		downloadPath,
	// 	); err != nil {
	// 		return fmt.Errorf("download failed: %w", err)
	// 	}

	// 	// extract self-extracting archive to C:\
	// 	if err := exec.Command(downloadPath, "-y", "-o"+sysDrive+`\`).Run(); err != nil {
	// 		return fmt.Errorf("extraction failed: %w", err)
	// 	}
	// 	os.Remove(downloadPath)

	// 	// first-run scaffolding (creates /etc, home dir, etc.)
	// 	bash := filepath.Join(msysPath, `usr\bin\bash.exe`)
	// 	if err := exec.Command(bash, "-lc", " ").Run(); err != nil {
	// 		return fmt.Errorf("first-run init failed: %w", err)
	// 	}
	// }

	// bash := filepath.Join(msysPath, `usr\bin\bash.exe`)
	// // core update
	// if err := exec.Command(bash, "-lc", "pacman --noconfirm -Syuu").Run(); err != nil {
	// 	return fmt.Errorf("core update failed: %w", err)
	// }
	// // normal update
	// if err := exec.Command(bash, "-lc", "pacman --noconfirm -Syuu").Run(); err != nil {
	// 	return fmt.Errorf("update failed: %w", err)
	// }

	if err := exec.Command("wt").Run(); err != nil {
		return fmt.Errorf("Running cmd failed: %w", err)
	}

	return nil
}

func downloadFile(url, dest string) error {
	resp, err := http.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	out, err := os.Create(dest)
	if err != nil {
		return err
	}
	defer out.Close()

	_, err = io.Copy(out, resp.Body)
	return err
}
