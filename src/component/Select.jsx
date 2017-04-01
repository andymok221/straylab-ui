import React, { Component } from 'react';
import ReactSelect from 'react-select';

class Select extends Component {
  render() {
    return <ReactSelect {...this.props} />;
  }
}

Select.propTypes = ReactSelect.propTypes;
Select.defaultProps = ReactSelect.defaultProps;

export default Select;
