import { useTrips, deleteTrip } from "./itineraryDataProvider.js";
import { ItineraryCard } from "./itineraryCard.js";
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".saveContainer")

const ItineraryListComponent = () => {
  const savedTrips = useTrips()

  const render = (trips) => {
    contentTarget.innerHTML = ""
    contentTarget.innerHTML += `
    ${
      trips.map(trip => ItineraryCard(trip)).reverse().join("")
    }`
  }
  render(savedTrips)

 //deletes Notes on click
 eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteNote--")) {
    console.log("delete has been clicked")
      const [prefix, id] = clickEvent.target.id.split("--")
    console.log(id)
      //nvoke the function that performs the delete operation. Then invokes useNotes and renders the list
     deleteTrip(id).then( 
       () =>{
          const newTrip = useTrips()
          render(newTrip)
       } 
     )}
})



}

export default ItineraryListComponent