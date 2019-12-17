let Bizarro = []

export const useBizzaro = () => {
  return Bizarro.slice()
}

export const getBizzaro = () => {
  return fetch("http://holidayroad.nss.team/bizarreries")
      .then(response => response.json())
      .then(
          parsedBizzaro => {
            
              // Bizzaro = parsedBizzaro
          }
      )
}