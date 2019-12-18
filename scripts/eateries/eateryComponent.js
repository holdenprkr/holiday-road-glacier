import { useEats } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eaterySelect")
const contentElement = document.querySelector(".eateryInfo")

export const eateryListComponent = () => {
 //adds a event listener to the dropdown and loops over the whole eatery array and then renders the selected choice 
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



//renders the eatery collection dropdown
  const render = eateryCollection => {
    contentTarget.innerHTML = `
      <section class="eatDropdown__card">
        <select class="eatDropdown" id="eatSelect">
        <option value="" disabled selected>Select an Eatery</option>
          ${eateryCollection.map(
              eat => `<option class="eatery__option">${eat.businessName}</option>`
          )}
        </select>
        </section>
    `
}

//filters the eateryCollection by wheelchair acessibility
let filteredCollection = eateryCollection.filter(
  (currentEatery) => {
    if (currentEatery.ameneties.wheelchairAccessible) {
      return currentEatery
    }
  }
  )
  
  render(filteredCollection)
//the event listener for the checkbox click event
let checkbutton = document.getElementById("eateryFilter")
eventHub.addEventListener("click", checkEvent => {
  if (event.target.id === "eateryFilter") {
  if (checkbutton.checked) {
      render(filteredCollection)
  } else {
      render(eateryCollection)
  }}
})


//renders the restauarnt info HTML
const renderEatery = restaurant => {
  contentElement.innerHTML =
  `
  <section class="res__card">
    <div> <strong>Name</strong>:${restaurant.businessName}</div><br>
    <div>${restaurant.description}</div>
    <div>${restaurant.city}</div>
    <div>${restaurant.state}</div>
</section>
  `
}
}