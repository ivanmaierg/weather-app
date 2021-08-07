import React, { useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import Button from '@components/Buttons/button';

const CallToAction = (props) => {
  const [toggle, setToggle] = useState({ isToggleOn: false });

  const handleClick = () => {
    setToggle(prevState => ({
      isToggleOn: !toggle.isToggleOn
    }));
  }
    return (
      <Button size="large" bgColor="gray" onClick={handleClick}>
        Search for Places
      </Button>
    );
}

export default CallToAction;
