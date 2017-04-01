import React, { Component } from 'react';

class Radio extends Component {
  render() {
    let {
      id,
      name,
      primary,
      secondary,
      color,
      size,
      checked,
      value,
      disabled,
      required,
      label,
      onClick
    } = this.props;
    let radioType = '';
    let radioColor = '';
    if (primary) {
      radioType = 'radio-control--primary';
    } else if (secondary) {
      radioType = 'radio-control--secondary';
    } else if (color) {
      radioColor = `radio-control--color-${color}`;
    }
    const finalClassName = `radio-control radio-control--${size} ${radioType} ${radioColor}`.trim();
    return (
      <label className={finalClassName}>
        <input
          id={id}
          type="radio"
          name={name}
          checked={checked}
          disabled={disabled}
          required={required}
          value={value}
          onClick={onClick}
        />
        <span className="radio-control__indicator" />
        <label>{label}</label>
      </label>
    );
  }
}

Radio.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  color: React.PropTypes.string,
  size: React.PropTypes.string,
  checked: React.PropTypes.bool,
  value: React.PropTypes.any.isRequired,
  disabled: React.PropTypes.bool,
  required: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  label: React.PropTypes.any
};

Radio.defaultProps = {
  id: undefined,
  name: undefined,
  primary: undefined,
  secondary: undefined,
  color: undefined,
  size: 'sm',
  checked: undefined,
  disabled: false,
  required: false,
  onClick: undefined,
  label: undefined
};

export default Radio;
