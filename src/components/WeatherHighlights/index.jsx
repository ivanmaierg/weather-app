import React from 'react'
import WeatherHighlight from '../WeatherHighlight'
import WindDirection from '../WindDirection'
import ProgressBar from '../ProgressBar'
import './styles.css'

const WeatherHighlights = () => {
    return (
        <section className="Weather-Highlights__section">
            <h1 className="Weather-Highlights__section--title">Today's Hightlights</h1>
            <div className="Weather-Highlights__container">
                <WeatherHighlight>
                    <h3>Wind status</h3>
                    <p>7<span>mph</span></p>
                    <WindDirection windDirection="S" />
                </WeatherHighlight>
                <WeatherHighlight>
                    <h3>Humidity</h3>
                    <p>84<span>%</span></p>
                    <ProgressBar progress={'84%'} />
                </WeatherHighlight>
                <WeatherHighlight>
                    <h3>visibility</h3>
                    <p>6,4<span> miles</span></p>
                </WeatherHighlight>
                <WeatherHighlight>
                    <h3>AirPressure</h3>
                    <p>998<span> mb</span></p>
                </WeatherHighlight>
            </div>
        </section>
    )
}

export default WeatherHighlights
