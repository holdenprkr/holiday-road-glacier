import { useParks } from "../parks/ParkProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".picContainer");

const DialogComponent = () => {
  // listening for event from parksList.js
  eventHub.addEventListener("picturesButtonClicked", event => {
    const parkPictures = useParks();
    console.log(event.detail.parkID);

    //  extracts objects from array
    const foundPics = data.images.url

    const picsHTML = foundPics 
      .map(singlePic => {
        return `
                  <div>
                      url goes here
                  </div>
              `;
      })
      .join("");

    document.querySelector(".omgwtfbbq").innerHTML = omgwtfbbqHTML;
    document.querySelector(".omgwtfbbq").showModal();
  });
  
  
//   const render = () => {
//     contentTarget.innerHTML = `
//     <dialog class="alibies">
//     <div class="alibi__text"></div>
//     <button id="closeDialog">Nope</button>
//     </dialog>
//     `;
//   };
  
//   render();
// };


// export default DialogComponent;
