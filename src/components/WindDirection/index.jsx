import React from 'react'
import direction from '@icons/direction.svg'

import './styles.css'
const WindDirection = ({ windDirectionName, windDirection }) => {

    return (
        <div className="WindDirection__container">
            <span style={{ display: 'flex',justifyContent:'center',alignItems:'center', marginRight:'1rem',backgroundColor: 'var(--gray--color)', borderRadius: '50%', width: '25px', height: '25px' }}><img style={{ transform: `rotate(${windDirection}deg)`, width: 'auto', height: '60%',margin:'auto' }} src={direction} alt={windDirectionName}></img></span>
            <span>{windDirectionName}</span>
        </div>
    )
}

export default WindDirection
