import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup';

class Button extends Component {
  render() {
    let {
      primary,
      secondary,
      color,
      className,
      size,
      type,
      onClick,
      children
    } = this.props;
    let buttonType = '';
    let buttonColor = '';
    if (primary) {
      buttonType = 'button--primary';
    } else if (secondary) {
      buttonType = 'button--secondary';
    } else if (color) {
      buttonColor = `button--color-${color}`;
    }
    const finalClassName = `button button--${size} ${buttonType} ${buttonColor} ${className}`.trim();
    return (
      <button
        type={type}
        onClick={onClick}
        className={finalClassName}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  color: React.PropTypes.string,
  className: React.PropTypes.string,
  size: React.PropTypes.string,
  type: React.PropTypes.string,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node.isRequired
};

Button.defaultProps = {
  primary: undefined,
  secondary: undefined,
  color: undefined,
  className: '',
  size: 'sm',
  type: undefined,
  onClick: undefined
};

Button.Group = ButtonGroup;

export default Button;
