import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import Button from '../button';

class GeoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !this.state.isToggleOn
    }));
  }
  render() {
    return (
      <Button size="rounded" bgColor="gray" onClick={this.handleClick}>
        <img src="">
      </Button>
    );
  }
}

export default GeoButton;
