let trips = []

export const useTrips = () => {
  return trips.slice()
}

export const getTrips = () => {
  //requests the data from an API from the internet
  return fetch("http://localhost:3000/itineraries")
  //When we get a response with a string, parse the string. YOU CAN ONLY SEND STRINGS OVER THE INTERNET
  .then(response => response.json())
  //Then do something with the data
  .then(
      parsedTrips => {
          // console.log("I have the note data")
         trips =  parsedTrips.slice()
      }
  )
}



export const saveTrip = trip => {
  return fetch("http://localhost:3000/itineraries", {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify(trip)
   })
   .then(getTrips)
 }

 export const deleteTrip = tripId => {
  return fetch(`http://localhost:3000/itineraries/${tripId}`, {
      method: "DELETE"
  })
      .then(getTrips)
}