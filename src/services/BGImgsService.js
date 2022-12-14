import { AppState } from "../AppState.js"
import { BackgroundImage } from "../Models/BackgroundImage.js"
import { sandboxServer } from "./AxiosService.js"



class BackgroundImagesService {
  async getBackground() {
    const res = await sandboxServer.get('images')
    AppState.backgroundImage = new BGImg(res.data)
  }
}

export const backgroundImagesService = new BackgroundImagesService()