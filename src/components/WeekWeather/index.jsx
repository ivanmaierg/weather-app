import React from 'react'
import './styles.css';
import { useSelector } from 'react-redux';
import DayWeather from '../DayWeather';

const WeekWeather = () => {
    const storeEntities = useSelector(state => state.weather.entities);
    const { weekWeather } = storeEntities || {};
    return (
        <section className="WeekWeather">
            {weekWeather && weekWeather.map(day => <DayWeather key={day.id} dayWeather={day} />)}
        </section>
    )
}

export default WeekWeather;
