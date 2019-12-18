import { getParks } from "./parks/ParkProvider.js";
import { getEats } from "./eateries/EateryProvider.js";
import { getBizzaro } from "./attractions/AttractionProvider.js";
import WeatherListComponent from "./weather/WeatherList.js";
import { getWeather } from "./weather/WeatherProvider.js";
import { eateryListComponent } from "./eateries/eateryComponent.js";
import { attractionComponent } from "./attractions/AttractionComponent.js";
import DropDownParks from "./parks/ParkDropDown.js";

getParks().then(
  () => {
    DropDownParks()
  }
)

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

getBizzaro().then(
  () => {
    attractionComponent()
  }
)
