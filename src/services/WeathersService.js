import { AppState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxServer } from "./AxiosService.js"



class WeathersService {
  async getWeather() {
    const res = await sandboxServer.get('weather')
    AppState.weather = new Weather(res.data)
  }
}

export const weathersService = new WeathersService()