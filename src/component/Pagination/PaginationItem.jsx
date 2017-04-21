import React, { Component } from 'react';

class PaginationItem extends Component {
  render() {
    const {
      className = '',
      active,
      disabled,
      onClick,
      children
    } = this.props;
    let state = '';
    if (active) state = 'pagination__item--active';
    if (disabled) state = 'pagination__item--disabled';
    const finalClassName = `pagination__item ${className} ${state}`.trim();
    return (
      <li onClick={onClick} className={finalClassName}>
        {children}
      </li>
    );
  }
}

PaginationItem.propTypes = {
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

PaginationItem.defaultProps = {
  active: false,
  disabled: false,
  onClick: undefined,
  className: ''
};

export default PaginationItem;
