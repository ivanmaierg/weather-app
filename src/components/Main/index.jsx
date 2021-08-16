import React from 'react'
import DayWeather from '../DayWeatherCard'
import './styles.css'
const Main = () => {
    return (
        <main>
            <section className="WeekWeather">
                <DayWeather/>
                <DayWeather />
                <DayWeather />
                <DayWeather />
                <DayWeather />
                <DayWeather />
                <DayWeather />
            </section>
            <section>
                <h1>Today's Hightlights</h1>
            </section>
        </main>
    )
}

export default Main
