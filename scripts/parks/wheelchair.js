import { useCampground } from "./campgroundProvider.js"

const wheelchairSelect = () => {
  const wheelchairs = useCampground()

  eventHub.addEventListener("change", changeEvent => {
      if (changeEvent.target.classList.contains("dropdown")) {
          const selectedwheelchair = changeEvent.target.value

          const message = new CustomEvent("wheelchairSelected", {
              detail: {
                  wheelchair: selectedwheelchair
              }
          })

          eventHub.dispatchEvent(message)
      }
  })

  eventHub.addEventListener("wheelchairSelected", event => {
    if ("wheelchairSelected" in event.detail) {
      let wheelchair = event.detail.wheelchair
      const matchingParks = wheelchairCollection.filter(currentWheelchair => {
        if (currentWheelchair.wheelchair === wheelchair) {
          return currentWheelchair;
        }
      });
      if(matchingParks.length === 0) {
        render(wheelchairCollection)
      }
      else {render(matchingParks)};
    }
  });



const render = wheelchairCollection => {
  wheelchairListContainer.innerHTML = `
      <select class="dropdown" id="wheelchairSelect">
          <option value="0">Parks with wheelchair accesible Lodging...</option>
          ${
            wheelchairCollection.sort().map(wheelchair =>
            `<option>${wheelchair}</option>`
            )
            }
      </select>
  `
}

render(wheelchairs)
}