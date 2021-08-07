import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import CallToAction from '@components/Buttons/CallToAction';
import GeoButton from '@components/Buttons/GeoButton';
import cloudImg from '@icons/cloud.png';
import './styles.css'

const PreviewPanel = (props) => {

    return (
        <aside className="left-panel">
            <div className="left-panel__buttons">
                <CallToAction />
                <GeoButton />
            </div>
            <div className="left-panel__weather">
                <div className="left-panel__weather--img cloud-1 cloud-2 cloud-3 cloud-4">
                </div>
                <div className="left-panel__weather--info"></div>
            </div>
        </aside >
    )
}

export default PreviewPanel