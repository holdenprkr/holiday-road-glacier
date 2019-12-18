import { useParks } from "./ParkProvider.js";

const contentTarget = document.querySelector(".parksDropDown")

const DropDownParks = () => {
  const allParks = useParks()

  const render = parks => {
    contentTarget.innerHTML = `
    <select>
    <option>Please select a park...</option>
    ${parks.map(
      park => {
        return `
        <option>${park.name}</option>`
      }
    )}
    </select>`
  }
  render(allParks)
}

export default DropDownParks