import { useParks } from "./ParkProvider.js";
import ParksComponent from "./parks.js"
import imagesComponent from "./images.js";

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".parkSection");

export const parksList = () => {
  const parksCollection = useParks()

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("pictures--")) {
      const [prefix, id] = clickEvent.target.id.split("--")
      
      for (let singlePark of parksCollection) {
        if (id === singlePark.id) {
          // target a dialog element
          console.log(singlePark)
          // changes inner.html to display pictures
          const dialogContent = document.querySelector("#picture__content")
          const dialog = document.querySelector(".pictures")
          dialogContent.innerHTML += singlePark.images.map(
              img => {
                return imagesComponent(img)
              }
              ).join("")
              // show dialog
              dialog.showModal()
      }
      else if (clickEvent.target.id.startsWith("close--")) {
        const dialogElement = clickEvent.target.parentNode 
        dialogElement.close()
    }
    
    }}
    



  eventHub.addEventListener("parkSelected", customEvent => {

    for (let singlePark of parksCollection) {
      if (customEvent.detail.park === singlePark.parkCode) {
        render(singlePark)
    } 
  }})
    
    let render = park => {
      contentElement.innerHTML = `
      ${ParksComponent(park)}`
      
    }
  })}
