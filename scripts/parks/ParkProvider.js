let parks = []

export const useParks = () => {
    return parks
}

export const getParks = () => {
    return fetch("       ")
        .then(response => response.json())
        .then(
            parsedParks => {
                console.table(parsedParks)
                parks = parsedParks.slice()
            }
        )
}

