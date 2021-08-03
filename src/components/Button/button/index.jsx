import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        className={`button ${this.props.bgColor} ${this.props.size}`}
        {...this.props}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  bgColor: PropTypes.oneOf(['purple', 'gray']),
  size: PropTypes.oneOf(['medium', 'large'])
};
Button.defaultProps = {
  bgColor: 'gray',
  size: 'medium'
};
export default Button;
