import React, { Component } from 'react';
import ReactSelect from 'react-select';

class Select extends Component {
  render() {
    const {
      disabled,
      error
    } = this.props;
    let selectState = '';
    if (disabled) {
      selectState = 'select--state-disabled';
    } else if (error) {
      selectState = 'select--state-error';
    }
    const finalClassName = `${selectState} ${this.props.className}`.trim();
    return <ReactSelect {...this.props} className={finalClassName} />;
  }
}

Select.propTypes = Object.assign({
  error: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
}, ReactSelect.propTypes);
Select.defaultProps = Object.assign({
  error: false,
  disabled: false,
  className: '',
}, ReactSelect.defaultProps);

export default Select;
