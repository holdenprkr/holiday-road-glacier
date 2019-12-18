const ParksComponent = (park) => {
  return `
      <div class="park">
            <header class="park__header">Name: ${park.fullName}</header>
              <div>States: ${park.states}</div>
              <div>Website: ${park.url}</div>
              <div>Directions: ${parks.directionsUrl}</div>
              <div>Discription: ${parks.description}</div>
              <button id="pictures--${parks.id}">Pictures</button>
      </div>
  `
}

export default CriminalComponent