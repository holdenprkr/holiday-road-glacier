let states = []

export const useStates = () => {
  return states.slice()
}

export const getStates = () => {
  return fetch("https://developer.nps.gov/api/v1/parks?api_key=Odl6I4v2LzwHnoSE37VROz5mJ0ALvGfHlWVv9zOx")
      .then(response => response.json())
      .then(
          parsedStates => {
              states = parsedStates.data
          }
      )
}
