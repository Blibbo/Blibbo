package scoop

type InstallScoopService struct{}

func (i *InstallScoopService) InstallScoop() error {
	return installScoop()
}
