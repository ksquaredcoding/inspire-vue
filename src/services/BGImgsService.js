import { AppState } from "../AppState.js"
import { BackgroundImage } from "../models/BGImg.js"
import { sandboxServer } from "./AxiosService.js"



class BackgroundImagesService {
  async getBackground() {
    const res = await sandboxServer.get('images')
    AppState.backgroundImage = new BackgroundImage(res.data)
  }
}

export const backgroundImagesService = new BackgroundImagesService()