import { setLocation } from '@/reducers/locationReducer';
import React from 'react'
import { useDispatch } from 'react-redux';
import './styles.css';

const LocationsList = ({locations}) => {

    const dispatch = useDispatch();
    return (
        <ul className='LocationsList__container'>
            {locations.map(location => <li onClick={() => dispatch(setLocation(location))} key={location.woeid}>
                <p>{location.title}</p><span> {'>'} </span>
            </li>)}
        </ul>
    )
}

export default LocationsList;
