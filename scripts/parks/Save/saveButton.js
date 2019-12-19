import { useParks } from "../ParkProvider.js"
import { saveTrip } from "./itineraryDataProvider.js"



const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".saveContainer")

export const saveButton = () => {
const parkCollection = useParks();
eventHub.addEventListener("parkSelected", event => {
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTrip") {
    const parkCode = event.detail.park
    const foundPark = parkCollection.find(
      (singlePark) => {
        return singlePark.parkCode === parkCode
      }
    )
    const parkName = foundPark.fullName
    
  
    const savedTrip = {
      park: parkName,
      bizzare: document.querySelector(".attractionDropdown").value,
      eatery: document.querySelector(".eatDropdown").value

    }

    saveTrip(savedTrip)
  }

})
  
  }
)

}