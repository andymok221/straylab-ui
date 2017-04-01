import React, { Component } from 'react';

class Input extends Component {
  render() {
    let {
      id,
      name,
      placeholder,
      size,
      type,
      required,
      className,
      defaultValue,
      value,
      focus,
      error,
      disabled,
      onChange
    } = this.props;
    let inputState = '';
    if (focus) {
      inputState = 'input--state-focus';
    } else if (error) {
      inputState = 'input--state-error';
    }
    const finalClassName = `input input--${size} ${inputState} ${className}`.trim();
    return (
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        className={finalClassName}
        required={required}
        type={type}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    );
  }
}

Input.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  size: React.PropTypes.string,
  type: React.PropTypes.string,
  required: React.PropTypes.bool,
  className: React.PropTypes.string,
  defaultValue: React.PropTypes.any,
  value: React.PropTypes.any,
  focus: React.PropTypes.bool,
  error: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  onChange: React.PropTypes.func
};

Input.defaultProps = {
  id: undefined,
  name: undefined,
  placeholder: '',
  size: 'sm',
  type: 'text',
  required: false,
  className: '',
  defaultValue: undefined,
  value: undefined,
  focus: false,
  error: false,
  disabled: false,
  onChange: undefined
};

export default Input;
