let Parks = []

export const useParks = () => {
  return Parks.slice()
}

export const getParks = () => {
  return fetch("https://developer.nps.gov/api/v1/parks?&fields=images,addresses&api_key=XQVgdeIcli9gAyrTqgY6T0Kb7bEk4qcLxm9jDkPA")
      .then(response => response.json())
      .then(
          parsedParks => {
              Parks = parsedParks.data
          }
      )
}