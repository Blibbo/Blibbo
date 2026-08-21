package msys2

type InstallMSYS2Service struct{}

func (i *InstallMSYS2Service) InstallMSYS2() error {
	return installMSYS2()
}
