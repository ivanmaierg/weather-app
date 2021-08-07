import React from 'react';
import './styles.css';
import classNames from 'classnames'
import PropTypes from 'prop-types';

const Button = (props) =>  {
    const buttonClassNames = classNames('button', 'button-'+props.size,'button-'+ props.bgColor) 
    return (
      <button
        className={buttonClassNames}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
}
Button.propTypes = {
  bgColor: PropTypes.oneOf(['purple', 'gray']),
  size: PropTypes.oneOf(['medium', 'large','rounded'])
};
Button.defaultProps = {
  bgColor: 'gray',
  size: 'medium',
};
export default Button;
