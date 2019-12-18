import settings from "../Settings.js"

let weather = []

export const useWeather = () => {
  return weather.slice()
}



export const getWeather = (park) => {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${park.addresses[0].city},${park.adresses[0].postalCode}&APPID=${settings.weatherKey}`)
      .then(response => response.json())
      .then(
          parsedWeather => {
              weather = parsedWeather.list
          }
      )
}