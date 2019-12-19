import { useParks, getParks } from "./ParkProvider.js"
import { useEats } from "../eateries/EateryProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#parkSelect")


const parkSelect = () => {
<<<<<<< HEAD
    const parks = useParks()  



=======
    const parks = useParks()
    const eateryCollection = useEats()
    // What should this component say to the event hub, and when
  
>>>>>>> master
    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "selectPark") {
            // Make a custom event to "talk" to other components
            const selectedPark = changeEvent.target.value
            const [parkCode, parkState] = changeEvent.target.value.split("--")
            const message = new CustomEvent("parkSelected", {
                detail: {
                    park: parkCode,
                    state: parkState
                }
            })

            // Dispatch it
            eventHub.dispatchEvent(message)
        }
    })

    const render = parksCollection => {
        contentTarget.innerHTML += `
            <select class="dropdown" id="selectPark">
                <option value="0">Please select a park...</option>
                ${
                    parksCollection.map(currentPark => {
                        return `<option>${currentPark.states} - ${currentPark.fullName}</option>`
                    }).sort()
                }
            </select>

        `
    }


    

    render(parks)
}

export default parkSelect