import React, { useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import Button from '@components/Buttons/button';
import MyLocation from '@icons/location-icon-24.svg'
import { getLocationWithCoords } from '@/services/GetWeather';
import { setLocation } from '@/reducers/locationReducer';
import { useDispatch } from 'react-redux';

const GeoButton = (props) => {
  const [geoLocation, setGeoLocation] = useState({});
  const dispatch = useDispatch();
  const handleClickGeoLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const {coords} = position;
        const {latitude,longitude} = coords;
        const weather = await getLocationWithCoords(latitude,longitude);
        console.log(weather)
        dispatch(setLocation(weather));
      });
    }
  }
  console.log(geoLocation);
  return (
      <Button size="rounded" bgColor="gray" onClick={handleClickGeoLocation}>
        <img style={{'margin':'auto'}}  src={MyLocation}></img>
      </Button>
    );

}

export default GeoButton;
