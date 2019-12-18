import { useWeather } from "./WeatherProvider.js";
import { WeatherComponent } from "./Weather.js";

const contentTarget = document.querySelector(".weatherSection")

const WeatherListComponent = () => {
  const parkWeather = useWeather()

  const render = (weatherData) => {
    // if (weatherData.dt_txt.contains("12:00:00"))
    for (let days of weatherData) {
      if (days.dt_txt.includes("12:00:00")) {
        contentTarget.innerHTML += WeatherComponent(days)
      }
    }
  }
    render(parkWeather)
}

export default WeatherListComponent