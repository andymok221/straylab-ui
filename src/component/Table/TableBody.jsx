import React, { Component } from 'react';

class TableBody extends Component {
  render() {
    const {
      className,
      children
    } = this.props;
    const finalClassName = `table__body ${className}`.trim();
    return (
      <tbody className={finalClassName}>
        {children}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

TableBody.defaultProps = {
  className: ''
};

export default TableBody;
