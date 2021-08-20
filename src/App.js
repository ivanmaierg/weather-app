import React, { useState, useEffect } from 'react';
import './style.css';
import AsidePanel from './components/AsidePanel';
import Main from './components/Main';
import mockResponse from './utils/resMock.json'
import weatherMapping from './utils/mapping/weather';
import WeatherHighlights from '@/components/WeatherHighlights';
import Button from '@components/Buttons/button';
import DayWeather from '@components/DayWeather';
import WeekWeather from '@components/WeekWeather';
import useFetch from './hooks/useFetch';
import { getWeather } from './services/GetWeather';

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState(() => {
    return mockResponse;
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWeather('london');
        setWeatherInfo(response);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);


  const { preview, todayHighlights, weekWeather } = weatherMapping(weatherInfo);
  return (
    <div className="app">
      <AsidePanel preview={preview} />
      <Main>
        <div className="temperature-buttons">
          <Button style={{ fontSize: '0.9rem', marginRight: '1rem' }} isActive={true} size="rounded" fontSize="xxl">C°</Button>
          <Button style={{ fontSize: '0.9rem', }} size="rounded" fontSize="xxl">F°</Button>
        </div>
        <WeekWeather>{weekWeather.map(day => <DayWeather key={day.id} dayWeather={day} />)}</WeekWeather>
        <WeatherHighlights todayHighlights={todayHighlights} />
        <footer><p>created by <strong>getsuga743</strong> - devChallenges.io</p></footer>
      </Main>
    </div>
  );
}
