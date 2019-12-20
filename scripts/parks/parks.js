const ParksComponent = park => {
  return `
      <div class="park">
            <header class="park__header" id="h"><span style="font-weight: bold;">Name:</span> ${park.fullName}</header>
              <div><span style="font-weight: bold;">States:</span> ${park.states}</div>
              <div><span style="font-weight: bold;">Website:</span><a href="${park.url}">National Parks Link</a></div>
              <div><span style="font-weight: bold;">Directions:</span><a href="${park.directionsUrl}">Directions Link</a></div>
              <div><span style="font-weight: bold;">Description:</span> ${park.description}</div>
              <button id="pictures--${park.id}">Pictures</button>
              <dialog class="pictures">
              <div id="picture__content"></div>
              <button id="close--Pics">close</button>

              </dialog>
      
      </div>
  `;
};

export default ParksComponent;
