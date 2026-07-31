package dev

func Try(fn func()) (success bool) {
	defer func() {
		if recover() != nil {
			success = false
		}
	}()
	fn()
	return true
}
