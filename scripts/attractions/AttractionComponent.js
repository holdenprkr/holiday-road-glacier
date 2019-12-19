import { useBizzaro } from "./AttractionProvider.js";


const eventHub= document.querySelector(".container")
const contentTarget= document.querySelector(".bizzareSelect")
const contentElement= document.querySelector(".bizzareInfo")
export const attractionComponent = () => {
  let attractionCollection = useBizzaro()

  eventHub.addEventListener("change", event => {
    if (event.target.id === "bizSelect") {
      for (let attraction of attractionCollection) {
        if (event.target.value === attraction.name) {
          renderAttractions(attraction)
        }
        
      }
    }
  })

  eventHub.addEventListener("parkSelected", event => {
    let bizzLocationFilter = attractionCollection.filter(
      (current) => {
        if (current.state === event.detail.state) {
          return current;
        }
      }
    )
    eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.classList.contains("bizzFilter")) {
        if (clickEvent.target.checked) {
          renderSelect(bizzLocationFilter)
        } else {
          renderSelect(attractionCollection)
        }
      }
    })
  })








  const renderSelect = attractions => {
    console.log(attractionCollection )
    contentTarget.innerHTML = `
    <section class="attractionDropdown__card">
    <select class="attractionDropdown" id="bizSelect">
        <option value="" disabled selected>Select an attraction</option>
          ${attractions.map(
              biz => `<option class="attraction__option">${biz.name}</option>`
          )}
        </select>
        </section>
    `
  }
  renderSelect(attractionCollection)

  const renderAttractions = bizz => {
    contentElement.innerHTML =
    `
    <section class="bizz__card">
      <div> <strong>Name</strong>:${bizz.name}</div><br>
      <div>${bizz.description}</div>
      <div>City:${bizz.city}</div>
      <div>State:${bizz.state}</div>
    </section>
    `
  }
  
}