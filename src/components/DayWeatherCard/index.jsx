import React from 'react'
import weatherImg from '@icons/weatherImg.png'
import './styles.css'
const DayWeather = () => {
    return (
        <div className="DayWeather DayWeather__container">
            <h1>Tomorrow</h1>
            <span><img src={weatherImg}/></span>
            <p className="DayWeather__temperatures"><span className="temperatures--max">16°C</span><span className="temperatures--min">5°C</span></p>
        </div>
    )
}

export default DayWeather
