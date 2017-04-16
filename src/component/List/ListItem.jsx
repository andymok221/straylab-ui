import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    const {
      className,
      children
    } = this.props;
    const finalClassName = `list__item ${className}`.trim();
    return (
      <li className={finalClassName}>
        {children}
      </li>
    );
  }
}

ListItem.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

ListItem.defaultProps = {
  className: ''
};

export default ListItem;
