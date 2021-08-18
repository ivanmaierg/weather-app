import React from 'react'
import Icon from '../Icon'
import './styles.css'
const DayWeather = ({dayWeather}) => {
    const {applicable_date,weatherState,weatherStateAbbr,max_temp,min_temp} = dayWeather
    return (
        <div className="DayWeather DayWeather__container">
            <h1>{applicable_date}</h1>
            <span className="Icon__container"><Icon name={weatherStateAbbr} width={'auto'} alt={weatherState}></Icon></span>
            <p className="DayWeather__temperatures"><span className="temperatures--max">{max_temp}</span><span className="temperatures--min">{min_temp}</span></p>
        </div>
    )
}

export default DayWeather
