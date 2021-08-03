import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import Button from '../button';

class CallToAction extends React.Component {
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
      <Button size="large" bgColor="gray" onClick={this.handleClick}>
        Search for Places
      </Button>
    );
  }
}

export default CallToAction;
