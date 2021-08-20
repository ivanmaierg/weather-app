import response from '../../utils/resMock.json';
import dayjs from 'dayjs';


const weatherMapping = (weather) => {
    const { consolidated_weather, title  } = weather;
    const [today, ...nextDaysWeather] = consolidated_weather;
    const { wind_direction_compass: windDirectionName, wind_direction: windDirection, wind_speed: windSpeed, humidity, visibility, air_pressure: airPressure } = today
    const { the_temp: temp, applicable_date: date, weather_state_abbr: weatherStateAbbr, weather_state_name: weatherState } = today

    const preview = {
        title,
        temp: temp.toFixed(0),
        date: dayjs(date).format('ddd, D MMM'),
        weatherState,
        weatherStateAbbr
    }
    const todayHighlights = {
        windDirection: windDirection.toFixed(0),
        windSpeed: windSpeed.toFixed(0),
        windDirectionName,
        humidity,
        visibility: visibility.toFixed(1),
        airPressure: airPressure.toFixed(0)
    }
    const weekWeather = nextDaysWeather.map((day, index) => {
        const { id, weather_state_name: weatherState, weather_state_abbr: weatherStateAbbr, applicable_date, max_temp, min_temp } = day
        return {
            id,
            weatherState,
            weatherStateAbbr,
            applicable_date: index === 0 ? 'tomorrow' : dayjs(applicable_date).format('ddd, D MMM'),
            max_temp: `${max_temp.toFixed(0)} C°`,
            min_temp: `${min_temp.toFixed(0)} C°`
        }
    })
    return {
        preview,
        todayHighlights,
        weekWeather
    }
}

export default weatherMapping;