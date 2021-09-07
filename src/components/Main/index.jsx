import React from 'react'

import './styles.css'
const Main = ({ children }) => {
    return (
        <main>
            <div>
                {children}
            </div>
        </main>
    )
}

export default Main
