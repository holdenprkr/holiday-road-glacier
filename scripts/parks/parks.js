const ParksComponent = park => {
  return `
      <div class="park">
            <header class="park__header" id="h">Name:</span> ${park.fullName}</header>
              <div>States:</span> ${park.states}</div>
              <div>Website:</span> ${park.url}</div>
              <div>Directions:</span> ${park.directionsUrl}</div>
              <div>Description:</span> ${park.description}</div>
              <button id="pictures--${park.id}">Pictures</button>
              <dialog class="pictures">
              <div id="picture__content"></div>
              <button id="close--Pics">close</button>

              </dialog>
      
      </div>
  `;
};

export default ParksComponent;
