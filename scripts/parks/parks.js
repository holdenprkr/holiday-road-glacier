import { useParks } from "./convictionProvider.js";

const contentElement = document.querySelector(".convictions__list");

const convictionSelect = () => {
    const convictions = useParks()

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "crimeSelect") {
            const selectedCrime = "arson"

            const message = new CustomEvent("crimeSelected", {
                detail: {
                    crime: selectedCrime
                }
            })
            eventHub.dispatchEvent(message)
        }
    })
        
    const render = convictionsCollection => {
        contentElement.innerHTML = `
        <select class="dropdown" id="crimeSelect">
             <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(
                crimeSelected => `<option>${crimeSelected}</option>`
            )}
        </select>
    }`;
    };
    render(convictions)
};

export default convictionSelect;
