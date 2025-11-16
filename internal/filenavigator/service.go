package filenavigator

import (
	"context"
	"log"
	"os"
	"path/filepath"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type FileNavigatorService struct {
	ctx context.Context
}

func NewFileNavigator() FileNavigator {
	return &FileNavigatorService{}
}

func (fn *FileNavigatorService) Startup(ctx context.Context) {
	fn.ctx = ctx
}

func (fn *FileNavigatorService) SelectDirectory() string {
	selectedDir, err := runtime.OpenDirectoryDialog(
		fn.ctx,
		runtime.OpenDialogOptions{
			Title: "Selecione uma pasta",
		},
	)

	if err != nil {
		return ""
	}

	return selectedDir
}

func (fn *FileNavigatorService) ListFilesFromDirectory(directoryPath string) []string {
	dirEntries, err := os.ReadDir(directoryPath)

	if err != nil {
		log.Fatal(err)
	}

	var files []string
	for _, dirEntry := range dirEntries {
		if dirEntry.Type().IsDir() {
			files = append(files, dirEntry.Name())
			continue
		}

		fileExtension := filepath.Ext(dirEntry.Name())

		if fileExtension == ".json" {
			files = append(files, dirEntry.Name())
			continue
		}
	}

	return files
}
