let Bizzarro = []

export const useBizzaro = () => {
  return Bizzarro.slice()
}

export const getBizzaro = () => {
  return fetch("http://holidayroad.nss.team/bizarreries")
      .then(response => response.json())
      .then(
          parsedBizzaro => {
            Bizzarro = parsedBizzaro
          }
      )
}