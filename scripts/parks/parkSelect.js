import { useParks, getParks } from "./ParkProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#parkSelect")


const parkSelect = () => {
    const parks = useParks()  



    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "parkSelect") {
            // Make a custom event to "talk" to other components
            const selectedPark = changeEvent.target.value

            const message = new CustomEvent("parkSelected", {
                detail: {
                    crime: selectedPark
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

