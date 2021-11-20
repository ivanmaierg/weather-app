import React from 'react';
import WeatherHighlight from '@components/WeatherHighlight';
import WindDirection from '@components/WindDirection';
import ProgressBar from '@components//ProgressBar';
import './styles.css';
import { useSelector } from 'react-redux';


const WeatherHighlights = () => {
    const {todayHighlights} = useSelector(state => state?.weather?.entities);
    const { airPressure,
        humidity,
        visibility,
        windDirection,
        windDirectionName,
        windSpeed
    } = todayHighlights;
    return (
        <section className="Weather-Highlights__section">
            <h1 className="Weather-Highlights__section--title">Today's Hightlights</h1>
            <div className="Weather-Highlights__container">
                <WeatherHighlight>
                    <h3>Wind status</h3>
                    <p>{windSpeed}<span>mph</span></p>
                    <WindDirection windDirectionName={windDirectionName} windDirection={windDirection} />
                </WeatherHighlight>
                <WeatherHighlight>
                    <h3>Humidity</h3>
                    <p>{humidity}<span>%</span></p>
                    <ProgressBar progress={humidity} />
                </WeatherHighlight>
                <WeatherHighlight>
                    <h3>visibility</h3>
                    <p>{visibility}<span> miles</span></p>
                </WeatherHighlight>
                <WeatherHighlight>
                    <h3>AirPressure</h3>
                    <p>{airPressure}<span> mb</span></p>
                </WeatherHighlight>
            </div>
        </section>
    )
}

export default WeatherHighlights
