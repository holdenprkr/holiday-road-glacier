let Eats = []

export const useEats = () => {
  return Eats.slice()
}

export const getEats = () => {
  return fetch("http://holidayroad.nss.team/eateries")
      .then(response => response.json())
      .then(
          parsedEats => {
              Eats = parsedEats
          }
      )
}