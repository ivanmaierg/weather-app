import React, { useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import Button from '@components/Buttons/button';

const CallToAction = ({ toggle, setToggle }) => {


  const handleClick = () => {
    setToggle(prevState => (!toggle));
  }
  return (
    <Button size="large" bgColor="gray" onClick={handleClick}>
      Search for Places
    </Button>
  );
}

export default CallToAction;
