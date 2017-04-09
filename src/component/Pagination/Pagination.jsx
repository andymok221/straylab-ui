import React, { Component } from 'react';
import PaginationItem from './PaginationItem';

class Pagination extends Component {
  render() {
    const {
      className,
      children
    } = this.props;
    const finalClassName = `pagination ${className}`.trim();
    return (
      <ul
        className={finalClassName}
      >
        {children}
      </ul>
    );
  }
}

Pagination.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

Pagination.defaultProps = {
  className: ''
};

Pagination.Item = PaginationItem;

export default Pagination;
