import { getParks } from "./parks/ParkProvider.js";
import { getEats } from "./eateries/EateryProvider.js";
import { getBizzaro } from "./attractions/AttractionProvider.js";
import WeatherListComponent from "./weather/WeatherList.js";
import { getWeather } from "./weather/WeatherProvider.js";
import { eateryListComponent } from "./eateries/eateryComponent.js";

getParks()

getWeather().then(
  () => {
    WeatherListComponent()
  }
)

getEats().then(
  () => {
    eateryListComponent()
  }
)

getBizzaro()