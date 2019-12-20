import { useEats } from "./EateryProvider.js"
import { useParks } from "../parks/ParkProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eaterySelect")
const contentElement = document.querySelector(".eateryInfo")

export const eateryListComponent = () => {
  //adds a event listener to the dropdown and loops over the whole eatery array and then renders the selected choice 
  const eateryCollection = useEats();
  const parkCollection = useParks();
  let locationCheckButton = document.querySelector(".locationFilter")
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

eventHub.addEventListener("parkSelected", event => {
  let locationFilteredCollection = eateryCollection.filter(
    (currentEatery) => {
      if (currentEatery.state === event.detail.state) {
        console.log("selected state", event.detail.state)
        return currentEatery 
      }
    }
  )
  eventHub.addEventListener("click", locateEvent => {
    if (locateEvent.target.classList.contains("locationFilter")) {
      if (locateEvent.target.checked) {
        render(locationFilteredCollection)
      } else {
        render(eateryCollection)
      }
    }
  })
})
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
  const boolConvert = (bool) => {
    if (bool === true) {
      return "Yes"
    } else {
      return "No"
    }
  }
  contentElement.innerHTML =
  `
  <section class="res__card">
    <div> <strong>Name</strong>:${restaurant.businessName}</div><br>
    <div>${restaurant.description}</div>
    <div>${restaurant.city}</div>
    <div>${restaurant.state}</div>
    <button class="button" id="eatButton--${restaurant.id}">Amenities</button>
      <dialog id="details--">
      <div class="moreInfo">Restrooms: ${boolConvert(restaurant.ameneties.restrooms)}</div>
      <div class="moreInfo">Pet Friendly: ${boolConvert(restaurant.ameneties.petFriendly)}</div>
      <div class="moreInfo">wifi Available: ${boolConvert(restaurant.ameneties.wifi)}</div>

      <button class="button--close">Close</button>
      </dialog>
</section>
  `
  eventHub.addEventListener("click", theEvent => {
    if (theEvent.target.id.startsWith("eatButton--")) {
      const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
      const theDialog = document.querySelector(dialogSiblingSelector)
      theDialog.showModal()
    } else if (theEvent.target.classList.contains("button--close")) {
      const dialogElement = theEvent.target.parentNode
      dialogElement.close()
    } 
     
  }
)
}
}