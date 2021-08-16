import React from 'react'
import './styles.css'
const ProgressBar = ({progress}) => {
    console.log(progress)
    return (
        <div className="progressBar__container">
            <span className="start">0</span>
            <span className="middle">50</span>
            <span className="end">100</span>
            <div className="progressBar">
                <div className="progressBar__content" style={{'width':`${progress}`}}></div>
            </div>
            <span className="sign">%</span>
        </div>
    )
}

export default ProgressBar
