package scoop

type Scoop struct{}

func (i *Scoop) Install() error {
	return install()
}

func Install() error {
	return install()
}
