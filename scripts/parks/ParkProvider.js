let Parks = []

export const useParks = () => {
  return Parks.slice()
}

export const getParks = () => {
  return fetch("https://developer.nps.gov/api/v1/parks?api_key=Odl6I4v2LzwHnoSE37VROz5mJ0ALvGfHlWVv9zOx")
      .then(response => response.json())
      .then(
          parsedParks => {
            
              Parks = parsedParks
          }
      )
}