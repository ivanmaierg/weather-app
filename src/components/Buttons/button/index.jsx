import React from 'react';
import './styles.css';
import classNames from 'classnames'
import PropTypes from 'prop-types';

const Button = (props) =>  {
    const buttonClassNames = classNames('button', 'button-'+props.size,'button-'+ props.bgColor,'button-font-'+props.fontSize,props.isActive ? 'button-active' : ''); 
    return (
      <button
        className={buttonClassNames}
        onClick={props?.onClick}
        style={props?.style}
      >
        {props?.children}
      </button>
    );
}
Button.propTypes = {
  bgColor: PropTypes.oneOf(['purple', 'gray']),
  size: PropTypes.oneOf(['small','medium', 'large','rounded']),
  fontSize:PropTypes.oneOf(['md','xl','xxl']),
  isActive: PropTypes.bool,
};
Button.defaultProps = {
  bgColor: 'gray',
  size: 'medium',
  fontSize:'md',
  isActive:false,
};
export default Button;
