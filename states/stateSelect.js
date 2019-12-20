import { useStates } from "./StateProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#stateSelect")


const stateSelect = () => {
    const states = useStates()

    // What should this component say to the event hub, and when
  
    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "stateSelect") {
            // Make a custom event to "talk" to other components
            const selectedStates = changeEvent.target.value

            const message = new CustomEvent("stateSelected", {
                detail: {
                    state: selectedState
                }
            })

            // Dispatch it
            eventHub.dispatchEvent(message)
        }
    })



}

export default stateSelect