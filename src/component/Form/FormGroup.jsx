import React, { Component } from 'react';

class FormGroup extends Component {
  render() {
    const { children, success, error, disabled, focus, className } = this.props;
    let formGroupState = '';
    if (focus) {
      formGroupState = 'form-group--state-focus';
    } else if (error) {
      formGroupState = 'form-group--state-error';
    } else if (success) {
      formGroupState = 'form-group--state-success';
    } else if (disabled) {
      formGroupState = 'form-group--state-disabled';
    }
    const finalClassName = `form-group ${formGroupState} ${className}`.trim();
    return (
      <div className={finalClassName}>
        {children}
      </div>
    );
  }
}

FormGroup.propTypes = {
  error: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  focus: React.PropTypes.bool,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

FormGroup.defaultProps = {
  error: false,
  disabled: false,
  focus: false,
  className: '',
  onChange: undefined,
};

export default FormGroup;
