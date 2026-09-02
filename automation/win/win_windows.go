package win

import (
	"fmt"
	"strings"
	"unsafe"

	"golang.org/x/sys/windows"
)

func quoteWindowsArg(s string) string {
	if s == "" {
		return `""`
	}

	needsQuotes := strings.ContainsAny(s, " \t\n\v\"")
	if !needsQuotes {
		return s
	}

	var b strings.Builder
	b.WriteByte('"')

	backslashes := 0
	for _, r := range s {
		switch r {
		case '\\':
			backslashes++
		case '"':
			b.WriteString(strings.Repeat(`\`, backslashes*2+1))
			b.WriteByte('"')
			backslashes = 0
		default:
			if backslashes > 0 {
				b.WriteString(strings.Repeat(`\`, backslashes))
				backslashes = 0
			}
			b.WriteRune(r)
		}
	}

	if backslashes > 0 {
		b.WriteString(strings.Repeat(`\`, backslashes*2))
	}

	b.WriteByte('"')
	return b.String()
}

func pippo(args ...string) error {

}

func ShellAsync(args ...string) error {
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
		quotedArgs := make([]string, len(args)-1)
		for i, arg := range args[1:] {
			quotedArgs[i] = quoteWindowsArg(arg)
		}

		p, err := windows.UTF16PtrFromString(strings.Join(quotedArgs, " "))
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

var (
	shell32             = windows.NewLazySystemDLL("shell32.dll")
	procShellExecuteExW = shell32.NewProc("ShellExecuteExW")
)

const seeMaskNoCloseProcess = 0x00000040

type shellExecuteInfo struct {
	cbSize         uint32
	fMask          uint32
	hwnd           windows.Handle
	lpVerb         *uint16
	lpFile         *uint16
	lpParameters   *uint16
	lpDirectory    *uint16
	nShow          int32
	hInstApp       windows.Handle
	lpIDList       uintptr
	lpClass        *uint16
	hkeyClass      windows.Handle
	dwHotKey       uint32
	hIconOrMonitor windows.Handle
	hProcess       windows.Handle
}

func Shell(args ...string) error {
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
		quotedArgs := make([]string, len(args)-1)
		for i, arg := range args[1:] {
			quotedArgs[i] = quoteWindowsArg(arg)
		}

		p, err := windows.UTF16PtrFromString(strings.Join(quotedArgs, " "))
		if err != nil {
			return fmt.Errorf("couldn't encode arguments: %w", err)
		}

		params = p
	}

	sei := shellExecuteInfo{
		cbSize:       uint32(unsafe.Sizeof(shellExecuteInfo{})),
		fMask:        seeMaskNoCloseProcess,
		lpVerb:       verb,
		lpFile:       file,
		lpParameters: params,
		nShow:        windows.SW_SHOWNORMAL,
	}

	r1, _, callErr := procShellExecuteExW.Call(
		uintptr(unsafe.Pointer(&sei)),
	)

	if r1 == 0 {
		if callErr != windows.ERROR_SUCCESS {
			return fmt.Errorf("couldn't launch %q: %w", args[0], callErr)
		}
		return fmt.Errorf("couldn't launch %q", args[0])
	}

	if sei.hProcess == 0 {
		return fmt.Errorf("couldn't obtain process handle for %q", args[0])
	}

	defer windows.CloseHandle(sei.hProcess)

	wait, err := windows.WaitForSingleObject(sei.hProcess, windows.INFINITE)
	if err != nil {
		return fmt.Errorf("error waiting for %q: %w", args[0], err)
	}

	if wait != windows.WAIT_OBJECT_0 {
		return fmt.Errorf("unexpected wait result for %q: %d", args[0], wait)
	}

	return nil
}
