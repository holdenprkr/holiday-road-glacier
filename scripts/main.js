import { getParks } from "./parks/ParkProvider.js";
import { getStates } from "../states/StateProvider.js";
import { getEats } from "./eateries/EateryProvider.js";
import { getBizzaro } from "./attractions/AttractionProvider.js";
import WeatherListComponent from "./weather/WeatherList.js";
import { getWeather } from "./weather/WeatherProvider.js";
import parkSelect from "./parks/parkSelect.js";
import stateSelect from "../states/stateSelect.js";
import { eateryListComponent } from "./eateries/eateryComponent.js";
import { attractionComponent } from "./attractions/AttractionComponent.js";
import { parksList } from "./parks/parksList.js";
import { saveButton } from "./parks/Save/saveButton.js";
import { getTrips } from "./parks/Save/itineraryDataProvider.js";
import ItineraryListComponent from "./parks/Save/itineraryList.js";


getStates().then(
    () => {
        stateSelect()
    }
)

parkSelect()
parksList()



WeatherListComponent()


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

getTrips().then(ItineraryListComponent)

saveButton()