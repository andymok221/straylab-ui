import React, { Component } from 'react';

class TableHeaderCell extends Component {
  render() {
    const {
      className,
      children
    } = this.props;
    const finalClassName = `table__header-cell ${className}`.trim();
    return (
      <th className={finalClassName}>
        {children}
      </th>
    );
  }
}

TableHeaderCell.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

TableHeaderCell.defaultProps = {
  className: ''
};

export default TableHeaderCell;
