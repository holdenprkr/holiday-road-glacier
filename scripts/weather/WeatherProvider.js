let weather = []

export const useWeather = () => {
  return weather.slice()
}

export const getWeather = () => {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Wellfleet,02667&APPID=10403207f6c17521be3f6f9f316ae75c&units=imperial`)
      .then(response => response.json())
      .then(
          parsedWeather => {
              weather = parsedWeather.list
          }
      )
}

// ${park.addresses[0].city},${park.adresses[0].postalCode}