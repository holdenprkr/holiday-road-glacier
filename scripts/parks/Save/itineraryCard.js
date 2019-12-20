export const ItineraryCard = (trip) => {
  return `
  <article class="savedTripCard">
  <h4>Have a Nice Trip!</h4>
  <div>Park: ${trip.park}</div>
  <div>Attraction: ${trip.bizzare}</div>
  <div>Eatery: ${trip.eatery}<div>
  </article>`
}