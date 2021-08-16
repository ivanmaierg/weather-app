import React from 'react'
import './styles.css'
const SearchPanel = ({ toggle, setToggle}) => {
    const handleClick = () => {
        setToggle(prevState => (!toggle));
    }
    return (
        <div className="SearchPanel">  
            <button type="button" onClick={handleClick}>x</button>
            <form>
                <input placeholder="search location"></input> <button>Search</button>
            </form>
            <ul>
                <li>London</li>
            </ul>
        </div>
    )
}

export default SearchPanel
