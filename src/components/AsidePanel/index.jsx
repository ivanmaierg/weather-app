import React, { useState } from 'react'
import PropTypes from 'prop-types';
import CallToAction from '@components/Buttons/CallToAction';
import GeoButton from '@components/Buttons/GeoButton';
import weatherImg from '@icons/weatherImg.png';
import './styles.css'
import { getLocation } from '@/services/GetWeather';
import LocationIcon from '@icons/location-icon-gray.svg'
import SearchPanel from '../SearchPanel';
import Icon from '@components/Icon';
import { useSelector } from 'react-redux';

import { changeBaseOnUnit } from '@/utils/changBaseOnUnit';

const AsidePanel = () => {
    const { preview } = useSelector(state => state?.weather?.entities);
    const unit = useSelector(state => state.unit.entities);

    const { title, temp, date, weatherState, weatherStateAbbr } = preview;
   

    const [searchPanel, setSearchPanel] = useState(false);
    const [unitTemp] = changeBaseOnUnit([temp], unit);

    const showSearchPanel = () => { setSearchPanel(!searchPanel) };


    return (
        <>
            <SearchPanel visible={searchPanel} showSearchPanel={showSearchPanel} />
            <aside className="left-panel">
                <div className="left-panel__buttons">
                    <CallToAction visible={searchPanel} showSearchPanel={showSearchPanel} />
                    <GeoButton />
                </div>
                <div className="left-panel__weather">
                    <div className="left-panel__weather--img">
                        <Icon name={weatherStateAbbr} width={'75%'} height={'75%'} style={{ margin: 'auto' }} alt={weatherState} />
                    </div>
                    <div className="left-panel__weather--info">
                        <p className="weather--temperature">{unitTemp}</p>
                        <p className="weather--status">{weatherState}</p>
                        <div className="weather--data">
                            <p className="weather--date">Today {date}</p>
                            <p className="weather--location"><span><img src={LocationIcon} /></span>{title}</p>
                        </div>
                    </div>
                </div>
            </aside >
        </>
    )
}

export default AsidePanel