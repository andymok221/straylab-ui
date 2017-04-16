import React, { Component } from 'react';

class TableCell extends Component {
  render() {
    const {
      className,
      children
    } = this.props;
    const finalClassName = `table__cell ${className}`.trim();
    return (
      <td className={finalClassName}>
        {children}
      </td>
    );
  }
}

TableCell.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

TableCell.defaultProps = {
  className: ''
};

export default TableCell;
