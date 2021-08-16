import React from 'react'
import DayWeather from '../DayWeatherCard';
import './styles.css';

const WeekWeather = () => {
    return (
            <section className="WeekWeather">
                <DayWeather />
                <DayWeather />
                <DayWeather />
                <DayWeather />
                <DayWeather />
                <DayWeather />
                <DayWeather />
            </section>
    )
}

export default WeekWeather
