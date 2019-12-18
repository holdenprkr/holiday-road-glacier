import { useCampground } from "./campgroundProvider.js"

// const wheelchairSelect = () => {
//   const wheelchairs = useCampground()

//   addEventListener("change", changeEvent => {
//       if (changeEvent.target.classList.contains("dropdown")) {
//           const selectedwheelchair = changeEvent.target.value

          

//   addEventListener("selectedwheelchair", event => {
//     if ("selectedwheelchair" in changeEvent) {
//       let wheelchair = event.detail.data.accessibility.wheelchairaccess
//       const matchingParks = wheelchairCollection.filter(currentWheelchair => {
//         if (currentWheelchair.wheelchair === wheelchair) {
//           return currentWheelchair;
//         }
//       });
//       if(matchingParks.length === 0) {
//         render(wheelchairCollection)
//       }
//       else {render(matchingParks)};
//     }
//   });



// const render = wheelchairCollection => {
//   wheelchairListContainer.innerHTML = `
//       <select class="dropdown" id="wheelchairSelect">
//           <option value="0">Parks with wheelchair accesible Lodging...</option>
//           ${
//             wheelchairCollection.sort().map(wheelchair =>
//             `<option>${wheelchair}</option>`
//             )
//             }
//       </select>
//   `
// }
      
// render(wheelchairs)
//     }
//   }
// }