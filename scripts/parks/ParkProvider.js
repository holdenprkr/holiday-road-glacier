import settings from "../Settings.js"
let Parks = []

export const useParks = () => {
  return Parks.slice()
}

export const getParks = () => {
  return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}&fields=images`)
      .then(response => response.json())
      .then(
          parsedParks => {
              console.table(parsedParks)
              Parks = parsedParks.data
          }
      )
}