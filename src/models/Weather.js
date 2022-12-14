


export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.desc = data.weather[0].main
    this.icon = data.weather[0].icon
    this.img = `https://openweathermap.org/img/wn/${this.icon}.png`
    this.celsius = Math.round(this.temp - 273)
    this.fahrenheit = Math.round(this.celsius * 1.8 + 32)
  }

  getWeatherDesc(x) {
    let description = ''
    x = this.desc
    switch (x) {
      case 'Thunderstorm': description += 'Stormy'
        break
      case 'Drizzle': description += 'Drizzly'
        break
      case 'Rain': description += 'Rainy'
        break
      case 'Snow': description += 'Snowy'
        break
      case 'Smoke': description += 'Smoky'
        break
      case 'Mist':
      case 'Haze':
      case 'Dust':
      case 'Fog':
      case 'Sand':
      case 'Ash':
      case 'Squall':
      case 'Tornado':
        description += 'Foggy'
        break
      case 'Clear': description += 'Clear Skies'
        break
      case 'Clouds': description += 'Cloudy'
        break
    }
    return description
  }
}
