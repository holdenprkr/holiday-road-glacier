import { useParks } from "./ParkProvider.js";
import ParksComponent from "./parks.js"

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".parkSection");

export const parksList = () => {
  const parksCollection = useParks()

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("pictures--")) {
      // target a dialog element
        const dialog = document.querySelector(".pictures")
      // changes inner.html to display pictures
        dialog.innerHTML = `${useParks(images)}`
      // show dialog
        dialog.showModal()
    } 
  })


  eventHub.addEventListener("parkSelected", customEvent => {

    for (let singlePark of parksCollection) {
      if (customEvent.detail.park === singlePark.parkCode) {
        render(singlePark)
    } 
  }})
    
    let render = park => {
      contentElement.innerHTML = `
      ${ParksComponent(park)}`

    }}


