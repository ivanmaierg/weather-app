import React from 'react'
import WeatherHighlights from '../WeatherHighlights'
import WeekWeather from '../WeekWeather'
import './styles.css'
const Main = () => {
    return (
        <main>
            <WeekWeather />
            <WeatherHighlights />
            <footer><p>created by <strong>getsuga743</strong> - devChallenges.io</p></footer>
        </main>
    )
}

export default Main
