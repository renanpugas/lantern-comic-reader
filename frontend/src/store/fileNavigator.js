import {
  SelectDirectory,
  SelectFile,
} from '../../wailsjs/go/filenavigator/FileNavigatorService'

export class FileNavigatorStore {
  async selectDirectory() {
    try {
      const selectedDir = await SelectDirectory()

      return selectedDir
    } catch {
      console.error('ERRO AO SELECIONAR DIRETORIO')
    }
  }

  async selectFile() {
    try {
      const selectedFile = await SelectFile()

      return selectedFile
    } catch {
      console.error('ERRO AO SELECIONAR ARQUIVO')
    }
  }
}
