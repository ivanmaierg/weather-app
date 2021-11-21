import React, { useState } from 'react';
import Button from '../Buttons/button'
import './styles.css'
import SearchIcon from '@icons/search.svg'
import { getLocation } from '@/services/GetWeather';
import LocationsList from '../LocationsList';

const SearchPanel = ({ visible, showSearchPanel }) => {
    const [formValue, setFormValue ] = useState('');
    const [locations, setLocations] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setFormValue(e.target.value);
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const locations = await getLocation(formValue);
        setLocations(locations.slice(0,5))
    }
    return (
        <div className={`SearchPanel ${visible ? 'active' : ''}`}>
            <button type="button" className="SearchPanel__button" onClick={() => showSearchPanel(!visible)}>x</button>
            <form onSubmit={onSubmit} className="SearchPanel__form">
                <div className="SearchPanel__searchBar">
                    <span ><img src={SearchIcon} alt="search"/></span>
                    <input type="text" placeholder="search location" name='location' value={formValue} onChange={handleInputChange}/>
                </div>
                <Button type="submit" bgColor='purple' size="small" fontSize='md'>Search</Button>
            </form>
            {locations && <LocationsList locations={locations}/>}
        </div>
    )
}

export default SearchPanel
