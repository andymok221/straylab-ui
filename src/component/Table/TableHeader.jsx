import React, { Component } from 'react';

class TableHeader extends Component {
  render() {
    const {
      className,
      children
    } = this.props;
    const finalClassName = `table__header ${className}`.trim();
    return (
      <thead className={finalClassName}>
        {children}
      </thead>
    );
  }
}

TableHeader.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node
};

TableHeader.defaultProps = {
  className: '',
  children: ''
};

export default TableHeader;
