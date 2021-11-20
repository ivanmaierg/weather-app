
let baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.metaweather.com/api' : 'http://localhost:8080/https://www.metaweather.com/api'


const getLocation = async (query) => {
    const url = `${baseUrl}/location/search/?query=${query}`
    try {
        const response = await fetch(url);
        const data = await response.json()
        return data
    } catch (err) {
        throw err
    }

}

const getLocationWithCoords = async (lat,long) => {
    const url = `${baseUrl}/location/search/?lattlong=${lat},${long}`
    try {
        const response = await fetch(url);
        const data = await response.json()
        return data[0];
    } catch (err) {
        throw err
    }

}

const getWeatherWithId = async (woeid) => {
    const url = `${baseUrl}/location/${woeid}/`
    try {
        const response = await fetch(url);
        const data = await response.json()
        return data
    } catch (err) {
        throw err
    }
}

const getWeather = async (query) => {
    try {
        let data = await getLocation(query);
        let weather = await getWeatherWithId(data[0].woeid);
        return weather;
    } catch (err) {
        throw err
    }
}

export { getLocation, getWeatherWithId, getWeather, getLocationWithCoords};
