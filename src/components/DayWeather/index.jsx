import { changeBaseOnUnit } from '@/utils/changBaseOnUnit';
import React from 'react';
import { useSelector } from 'react-redux'
import Icon from '../Icon';
import './styles.css';

const DayWeather = ({dayWeather}) => {
    const unit = useSelector(state => state.unit.entities);
    const {applicable_date,weatherState,weatherStateAbbr,max_temp,min_temp} = dayWeather;
    const [max,min] = changeBaseOnUnit([max_temp,min_temp],unit);
    return (
        <div className="DayWeather DayWeather__container">
            <h1>{applicable_date}</h1>
            <span className="Icon__container"><Icon name={weatherStateAbbr} width={'100%'} height={'100%'} alt={weatherState}></Icon></span>
            <p className="DayWeather__temperatures"><span className="temperatures--max">{max}</span><span className="temperatures--min">{min}</span></p>
        </div>
    )
}

export default DayWeather
