import React from 'react';
import FormGroup from './FormGroup';

const Form = ({
  id,
  className = '',
  disabled,
  onSubmit,
  onChange,
  children
}) => (
  <form
    id={id}
    className={`form ${className}`}
    disabled={disabled}
    onSubmit={onSubmit}
    onChange={onChange}
  >
    {children}
  </form>
);

Form.Group = FormGroup;

export default Form;
