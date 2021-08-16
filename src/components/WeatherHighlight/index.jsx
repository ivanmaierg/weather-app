import React from 'react'
import './styles.css'
const WeatherHighlight = ({children}) => {
    return (
        <div className="WeatherHighlight__container">
            {children}
        </div>
    )
}

export default WeatherHighlight
