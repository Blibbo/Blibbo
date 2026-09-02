package msys2

type Msys2 struct{}

func (i *Msys2) Install() error {
	return install()
}

func Install() error {
	return install()
}
