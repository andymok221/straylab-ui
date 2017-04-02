import React, { Component } from 'react';
import FormGroup from './FormGroup';

class Form extends Component {
  render() {
    const {
      id,
      name,
      action,
      method,
      className,
      onSubmit,
      onChange,
      children
    } = this.props;
    return (
      <form
        id={id}
        name={name}
        action={action}
        method={method}
        className={`form ${className}`}
        onSubmit={onSubmit}
        onChange={onChange}
      >
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  action: React.PropTypes.string,
  method: React.PropTypes.string,
  className: React.PropTypes.string,
  onSubmit: React.PropTypes.func,
  onChange: React.PropTypes.func,
  children: React.PropTypes.node.isRequired
};

Form.defaultProps = {
  id: undefined,
  name: undefined,
  action: undefined,
  method: undefined,
  className: '',
  onSubmit: undefined,
  onChange: undefined
};

Form.Group = FormGroup;

export default Form;
