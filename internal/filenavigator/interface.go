package filenavigator

import "context"

type FileNavigator interface {
	Startup(ctx context.Context)
	SelectDirectory() string
	SelectFile() string
	ListFilesFromDirectory(directoryPath string) []string
}
