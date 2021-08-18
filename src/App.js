import React, {useState} from 'react';
import './style.css';
import AsidePanel from './components/AsidePanel';
import Main from './components/Main';
import response from './utils/resMock.json'
import weatherMapping from './services/mapping/weather';
export default function App() {
  const [weatherInfo, setWeatherInfo] = useState(()=>{
    return response
  })
  const {weekWeather} = weatherMapping(weatherInfo)
  console.log(weekWeather)
  return (
    <div className="app">
        <AsidePanel />
        <Main weekWeather={weekWeather} />
    </div>
  );
}
