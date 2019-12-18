import settings from "../Settings.js"
let campground = []

export const useCampground = () => {
  return campground.slice()
}

export const getCampground = () => {
  return fetch(`https://developer.nps.gov/api/v1/campgrounds?&api_key=${settings.apiKey}`)
      .then(response => response.json())
      .then(
          parsedCampground => {
              console.table(parsedCampground)
              Campground = parsedCampground
          }
      )
}