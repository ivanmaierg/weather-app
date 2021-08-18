import React from 'react'
import Button from '../Buttons/button'
import DayWeather from '../DayWeather'
import WeatherHighlights from '../WeatherHighlights'
import WeekWeather from '../WeekWeather'
import './styles.css'
const Main = ({weekWeather}) => {
    return (
        <main>
            <div>
                <div className="temperature-buttons">
                    <Button style={{fontSize:'0.9rem',marginRight:'1rem'}} size="rounded" fontSize="xxl">C°</Button>
                    <Button style={{fontSize:'0.9rem',}} size="rounded" fontSize="xxl">F°</Button>
                </div>
                <WeekWeather>{weekWeather.map(day => <DayWeather key={day.id} dayWeather={day}/>)}</WeekWeather>
                <WeatherHighlights />
                <footer><p>created by <strong>getsuga743</strong> - devChallenges.io</p></footer>
            </div>
        </main>
    )
}

export default Main
