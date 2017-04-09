import React, { Component } from 'react';

class PaginationItem extends Component {
  render() {
    const {
      className = '',
      active,
      disabled,
      children
    } = this.props;
    let state = '';
    if (active) state = 'pagination__item--active';
    if (disabled) state = 'pagination__item--disabled';
    const finalClassName = `pagination__item ${className} ${state}`.trim();
    return (
      <li className={finalClassName}>
        {children}
      </li>
    );
  }
}

export default PaginationItem;
