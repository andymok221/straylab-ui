import React, { Component } from 'react';

class Pie extends Component {
  render() {
    let {
      primary,
      secondary,
      color,
      className,
      size,
      border,
      percentage
    } = this.props;
    let pieType = '';
    let pieColor = '';
    if (primary) {
      pieType = 'pie--primary';
    } else if (secondary) {
      pieType = 'pie--secondary';
    } else if (color) {
      pieColor = `pie--color-${color}`;
    }
    const pieStyle = {
      width: `${size}px`,
      height: `${size}px`
    };
    const leftRotation = percentage > 50 ? 180 : percentage / 50 * 180;
    const rightRotation = percentage < 50 ? 0 : (percentage - 50) / 50 * 180;
    const leftHalfStyle = {
      clip: `rect(0, ${size / 2}px, ${size}px, 0)`,
      transform: `rotate(${leftRotation}deg)`,
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: `${border}px`
    };
    const rightEmptyHalfStyle = {
      clip: `rect(0, ${size / 2}px, ${size}px, 0)`,
      transform: `rotate(${rightRotation}deg)`,
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: `${border}px`
    };
    const rightHalfStyle = {
      clip: `rect(0, ${size / 2}px, ${size}px, 0)`,
      transform: `rotate(-${180 - rightRotation}deg)`,
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: `${border}px`
    };
    const baseStyle = {
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: `${border}px`
    };
    const finalClassName = `pie ${pieType} ${pieColor} ${className}`.trim();
    return (
      <div
        className={finalClassName}
        style={pieStyle}
      >
        <div className="pie__left-half" style={leftHalfStyle} />
        {percentage < 50 && <div className="pie__right-half-empty" style={rightEmptyHalfStyle} />}
        {percentage > 50 && <div className="pie__right-half" style={rightHalfStyle} />}
        <div className="pie__base" style={baseStyle} />
      </div>
    );
  }
}

Pie.propTypes = {
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  color: React.PropTypes.string,
  className: React.PropTypes.string,
  size: React.PropTypes.number,
  border: React.PropTypes.number,
  percentage: React.PropTypes.number.isRequired
};

Pie.defaultProps = {
  primary: undefined,
  secondary: undefined,
  color: undefined,
  className: '',
  size: 50,
  border: 3
};

export default Pie;
