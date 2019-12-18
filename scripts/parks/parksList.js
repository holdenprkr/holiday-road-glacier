import { useParks } from "./ParkProvider.js";
import parksComponent from "./parks.js"

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".parkSection");

export const parksList = () => {
  const parksCollection = useParks()

  eventHub.addEventListener("parkSelected", changeEvent => {
    let render = parkCollection => {
      contentElement.innerHTML = ""
      contentElement.innerHTML += `
        ${parkCollection
          .map(currentPark => {
            return parksComponent(currentPark);
          })
          .join("")}`;
    };
    render(parksCollection);
  }
     
    
  }
