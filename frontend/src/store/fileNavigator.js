import { SelectDirectory } from '../../wailsjs/go/filenavigator/FileNavigatorService'

export class FileNavigatorStore {
  async selectDirectory() {
    try {
      const selectedDir = await SelectDirectory()

      return selectedDir
    } catch {
      console.error('ERRO AO SELECIONAR DIRETORIO')
    }
  }
}
