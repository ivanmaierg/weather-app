import React, { useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import Button from '@components/Buttons/button';
import MyLocation from '@icons/location-icon-24.svg'

const GeoButton = (props) => {
  const [toggle, setToggle] = useState({ isToggleOn: false });
  const handleClick = () => {
    setToggle({
      isToggleOn: !toggle.isToggleOn
    });
  }
  return (
      <Button size="rounded" bgColor="gray" onClick={handleClick}>
        <img src={MyLocation}></img>
      </Button>
    );

}

export default GeoButton;
