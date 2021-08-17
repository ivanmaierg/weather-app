import React, { useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import Button from '@components/Buttons/button';

const CallToAction = ({ visible, showSearchPanel }) => {

  return (
    <Button size="large" bgColor="gray" onClick={() => showSearchPanel(!visible)}>
      Search for Places
    </Button>
  );
}

export default CallToAction;
