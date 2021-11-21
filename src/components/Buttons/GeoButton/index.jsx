import React from 'react';
import './styles.css';
import Button from '@components/Buttons/button';
import MyLocation from '@icons/location-icon-24.svg'
import { getLocationWithCoords } from '@/services/GetWeather';
import { setLocation } from '@/reducers/locationReducer';
import { useDispatch } from 'react-redux';

const GeoButton = (props) => {
  const dispatch = useDispatch();
  const handleClickGeoLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const {coords} = position;
        const {latitude,longitude} = coords;
        const weather = await getLocationWithCoords(latitude,longitude);
        dispatch(setLocation(weather));
      });
    }
  }
  return (
      <Button size="rounded" bgColor="gray" onClick={handleClickGeoLocation}>
        <img style={{'margin':'auto'}} alt='geolocation' src={MyLocation}></img>
      </Button>
    );

}

export default GeoButton;
