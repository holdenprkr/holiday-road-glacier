import { useTrips } from "./itineraryDataProvider.js";
import { ItineraryCard } from "./itineraryCard.js";

const contentTarget = document.querySelector(".saveContainer")

const ItineraryListComponent = () => {
  const savedTrips = useTrips()

  const render = (trips) => {
    contentTarget.innerHTML += `
    ${
      trips.map(trip => ItineraryCard(trip)).join("")
    }`
  }
  render(savedTrips)
}

export default ItineraryListComponent