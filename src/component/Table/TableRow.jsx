import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    const {
      className,
      children
    } = this.props;
    const finalClassName = `table__row ${className}`.trim();
    return (
      <tr className={finalClassName}>
        {children}
      </tr>
    );
  }
}

TableRow.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

TableRow.defaultProps = {
  className: ''
};

export default TableRow;
