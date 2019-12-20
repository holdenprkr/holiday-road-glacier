import { useWeather, getWeather } from "./WeatherProvider.js";
import { WeatherComponent } from "./Weather.js";
import { useParks } from "../parks/ParkProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".weatherSection")

const allParks = useParks()

const WeatherListComponent = () => {
  
  eventHub.addEventListener("parkSelected", e => {
    for (let park of allParks) {
      if (e.detail.park === park.parkCode) {
        console.log("in the if logic")
        console.log(park.addresses)
        getWeather(park).then(() => render(useWeather()))
      }
    }
  })

  const render = (weatherData) => {
    // if (weatherData.dt_txt.contains("12:00:00"))
    contentTarget.innerHTML = ""
    for (let days of weatherData) {
      if (days.dt_txt.includes("12:00:00")) {
        contentTarget.innerHTML += WeatherComponent(days)
      }
    }
  }
}

export default WeatherListComponent