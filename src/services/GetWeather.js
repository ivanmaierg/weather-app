
const getLocation = async (query) => {
    const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${query}`
    try {
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
    } catch (err) {
        throw err
    }

}

const getWeatherWithCoords = async (woeid) => {
    const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
    try {
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}


export {getLocation,getWeatherWithCoords };
