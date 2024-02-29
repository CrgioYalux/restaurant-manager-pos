function getCurrentDateTimeToJSON() {
    const current = new Date(Date.now())
    const year = current.getFullYear()
    const month = current.getMonth() + 1
    const day = current.getDate()
    const hours = current.getHours()
    const minutes = current.getMinutes()
    const seconds = current.getSeconds()

    const formattedMonth = month < 10 ? `0${month}` : `${day}`
    const formattedDay = day < 10 ? `0${day}` : `${day}`
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

    const result = `${year}-${formattedMonth}-${formattedDay}T${formattedHours}:${formattedMinutes}:${formattedSeconds}.000Z`

    return result
}

function getCurrentDateToJSON() {
    const current = new Date(Date.now())
    const year = current.getFullYear()
    const month = current.getMonth() + 1
    const day = current.getDate()

    const formattedMonth = month < 10 ? `0${month}` : `${day}`
    const formattedDay = day < 10 ? `0${day}` : `${day}`

    const result = `${year}-${formattedMonth}-${formattedDay}`

    return result
}

export {
    getCurrentDateTimeToJSON,
    getCurrentDateToJSON,
}
