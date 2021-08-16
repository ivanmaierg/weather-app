import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import CallToAction from '@components/Buttons/CallToAction';
import GeoButton from '@components/Buttons/GeoButton';
import weatherImg from '@icons/weatherImg.png';
import './styles.css'
import { getLocation } from '@/services/GetWeather';
import LocationIcon from '@icons/location-icon-gray.svg'
const AsidePanel = (props) => {
    getLocation('london')
    return (
        <aside className="left-panel">
            <div className="left-panel__buttons">
                <CallToAction />
                <GeoButton />
            </div>
            <div className="left-panel__weather">
                <div className="left-panel__weather--img">
                    <img src={weatherImg}></img>
                </div>
                <div className="left-panel__weather--info">
                    <p className="weather--temperature">15<span>°C</span></p>
                    <div className="weather--data">
                        <p className="weather--status">Shower</p>
                        <p className="weather--date">Today Fri,13 Aug</p>
                        <p className="weather--location"><span><img src={LocationIcon} /></span> Helsinki</p>
                    </div>

                </div>
            </div>
        </aside >
    )
}

export default AsidePanel