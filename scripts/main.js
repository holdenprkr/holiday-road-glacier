import { getParks } from "./parks/ParkProvider.js";
import { getStates } from "../states/StateProvider.js";
import { getEats } from "./eateries/EateryProvider.js";
import { getBizzaro } from "./attractions/AttractionProvider.js";
import parkSelect from "./parks/parkSelect.js";
import stateSelect from "../states/stateSelect.js";
import { eateryListComponent } from "./eateries/eateryComponent.js";
import { attractionComponent } from "./attractions/AttractionComponent.js";
import { parksList } from "./parks/parksList.js";

getStates().then(
    () => {
        stateSelect()
    }
)
// getParks().then(
//   () => {
//     parkSelect()
//   }
// )
parkSelect()
parksList()




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
