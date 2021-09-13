import React, { useState, useEffect } from 'react';
import './style.css';
import AsidePanel from './components/AsidePanel';
import Main from './components/Main';
import weatherMapping from './utils/mapping/weather';
import WeatherHighlights from '@/components/WeatherHighlights';
import Button from '@components/Buttons/button';
import WeekWeather from '@components/WeekWeather';

import { getWeather, getWeatherWithId } from './services/GetWeather';
import { addWeather } from './reducers/weatherReducer';
import { useDispatch,useSelector } from 'react-redux';

export default function App() {
  const location = useSelector(state => state.location.entities);
  console.log('location',location)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
        try {
          let response;
          if(location?.woeid){
            response = await getWeatherWithId(location.woeid);
          }else {
            response = await getWeather(location.title);
          }
          const weather = await weatherMapping(response);
          dispatch(addWeather(weather));
        } catch (error) {
          console.log("error", error);
        }
    };
    fetchData();
  }, [location]);

  return (
    <div className="app">
      <AsidePanel/>
      <Main>
        <div className="temperature-buttons">
          <Button style={{ fontSize: '0.9rem', marginRight: '1rem' }} isActive={true} size="rounded" fontSize="xxl">C°</Button>
          <Button style={{ fontSize: '0.9rem', }} size="rounded" fontSize="xxl">F°</Button>
        </div>
        <WeekWeather/>
        <WeatherHighlights/>
        <footer><p>created by <strong>getsuga743</strong> - devChallenges.io</p></footer>
      </Main>
    </div>
  );
}
