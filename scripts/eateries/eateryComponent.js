import { useEats } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eaterySelect")
const contentElement = document.querySelector(".eateryInfo")

export const eateryListComponent = () => {
const eateryCollection = useEats();

eventHub.addEventListener("change", event => {
  if (event.target.id === "eatSelect") {
    for (let restaurant of eateryCollection) {
      if (event.target.value === restaurant.businessName) {
        renderEatery(restaurant)
      }
      
    }
  }


})




  const render = eateryCollection => {
    contentTarget.innerHTML += `
        <select class="eatDropdown" id="eatSelect">
        <option value="" disabled selected>Select an Eatery</option>
          ${eateryCollection.map(
              eat => `<option class="eatery__option">${eat.businessName}</option>`
          )}
        </select>
    `
}
render(eateryCollection)

const renderEatery = restaurant => {
  contentElement.innerHTML =
  `
    <div> <strong>Name</strong>:${restaurant.businessName}</div><br>
    <div>${restaurant.description}</div>
    <div>${restaurant.city}</div>
    <div>${restaurant.state}</div>

  `
}
}