import { useParks } from "./ParkProvider.js";
import ParksComponent from "./parks.js"

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".parkSection");

export const parksList = () => {
  const parksCollection = useParks()

  eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "selectPark") {

    for (let singlePark of parksCollection) {
      console.log(changeEvent.target.value)
      if (changeEvent.target.value === singlePark.parkCode) {
        render(singlePark)
    } 
  }}})
    
    let render = park => {
      contentElement.innerHTML = `
      ${ParksComponent(park)}`

    }}
