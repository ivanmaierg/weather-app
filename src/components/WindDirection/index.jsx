import React from 'react'
import direction from '@icons/direction.svg'
import { directions } from './directions'

const WindDirection = ({windDirection}) => {
    return (
        <div>
            <span><img style={{ transform: `rotate(${directions[windDirection]}deg)` }} src={direction}></img></span>WSW
        </div>
    )
}

export default WindDirection
