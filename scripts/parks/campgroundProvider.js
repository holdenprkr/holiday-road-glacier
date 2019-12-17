let campground = []

export const useCampground = () => {
  return campground.slice()
}

export const getCampground = () => {
  return fetch("https://developer.nps.gov/api/v1/campgrounds?&api_key=Odl6I4v2LzwHnoSE37VROz5mJ0ALvGfHlWVv9zOx")
      .then(response => response.json())
      .then(
          parsedCampground => {
              console.table(parsedCampground)
              Campground = parsedCampground
          }
      )
}