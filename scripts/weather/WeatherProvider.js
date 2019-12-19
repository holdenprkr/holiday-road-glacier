import settings from "../Settings.js"

let weather = []

export const useWeather = () => {
  return weather.slice()
}



export const getWeather = (park) => {
  console.log(park.addresses[0])
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${park.addresses[0].postalCode},us&APPID=${settings.weatherKey}`)
    .then(response => response.json())
    .then(
      parsedWeather => {
        weather = parsedWeather.list
      }
    )
}