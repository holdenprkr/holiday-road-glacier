import { getParks } from "./parks/ParkProvider.js";
import { getStates } from "../states/StateProvider.js";
import { getEats } from "./eateries/EateryProvider.js";
import { getBizzaro } from "./attractions/AttractionProvider.js";
import parkSelect from "./parks/parkSelect.js";
import stateSelect from "../states/stateSelect.js";

getStates().then(
    () => {
        stateSelect()
    }
)

getParks().then(
    () => {
        parkSelect()
    }
)
getEats()
getBizzaro()
import { eateryListComponent } from "./eateries/eateryComponent.js";


getParks()


getEats().then(
  () => {
    eateryListComponent()
  }
)


getBizzaro()
