import { getParks } from "./parks/ParkProvider.js";
import { getEats } from "./eateries/EateryProvider.js";
import { getBizzaro } from "./attractions/AttractionProvider.js";
import { eateryListComponent } from "./eateries/eateryComponent.js";

getParks()


getEats().then(
  () => {
    eateryListComponent()
  }
)


getBizzaro()