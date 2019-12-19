import { useParks } from "./ParkProvider.js";
import ParksComponent from "./parks.js"

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".parkSection");

export const parksList = () => {
  const parksCollection = useParks()

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
