import React from 'react'
import Button from '../Buttons/button'
import './styles.css'
import SearchIcon from '@icons/search.svg'

const SearchPanel = ({ visible, showSearchPanel }) => {
    return (
        <div className={`SearchPanel ${visible ? 'active' : ''}`}>
            <button type="button" className="SearchPanel__button" onClick={() => showSearchPanel(!visible)}>x</button>
            <form className="SearchPanel__form">
                <div className="SearchPanel__searchBar">
                    <span><img src={SearchIcon} /></span>
                    <input placeholder="search location" />

                </div>
                <Button bgColor='purple' size="small" fontSize='md'>Search</Button>
            </form>
            <ul>
                <li>London</li>
            </ul>
        </div>
    )
}

export default SearchPanel
