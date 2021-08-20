import React from 'react'
import './styles.css'
const ProgressBar = ({progress}) => {
    return (
        <div className="progressBar__container">
            <span className="start">0</span>
            <span className="middle">50</span>
            <span className="end">100</span>
            <progress value={progress} max="100" />
            <span className="sign">%</span>
        </div>
    )
}

export default ProgressBar
