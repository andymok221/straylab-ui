import React, { Component } from 'react';

class CheckBox extends Component {
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
    let checkboxType = '';
    let checkboxColor = '';
    if (primary) {
      checkboxType = 'checkbox-control--primary';
    } else if (secondary) {
      checkboxType = 'checkbox-control--secondary';
    } else if (color) {
      checkboxColor = `checkbox-control--color-${color}`;
    }
    const finalClassName = `checkbox-control checkbox-control--${size} ${checkboxType} ${checkboxColor}`.trim();
    return (
      <label className={finalClassName}>
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={checked}
          disabled={disabled}
          required={required}
          onClick={onClick}
          value={value}
        />
        <span className="checkbox-control__indicator" />
        <label>{label}</label>
      </label>
    );
  }
}

CheckBox.propTypes = {
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

CheckBox.defaultProps = {
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

export default CheckBox;
