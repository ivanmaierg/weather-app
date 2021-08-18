import response from '../../utils/resMock.json';
import dayjs from 'dayjs';


const weatherMapping = (weather) => {
    const { consolidated_weather } = weather;
    const [,...nextDaysWeather] = consolidated_weather;
    console.log(nextDaysWeather)
    const weekWeather = nextDaysWeather.map((day, index) => {
        const { id, weather_state_name:weatherState,weather_state_abbr:weatherStateAbbr,applicable_date, max_temp, min_temp } = day
        return {
            id,
            weatherState,
            weatherStateAbbr,
            applicable_date: index === 0 ? 'tomorrow' : dayjs(applicable_date).format('ddd, D MMM') ,
            max_temp: `${max_temp.toFixed(0)} C°`,
            min_temp: `${min_temp.toFixed(0)} C°`
        }
    })
    return { weekWeather }
}

export default weatherMapping;