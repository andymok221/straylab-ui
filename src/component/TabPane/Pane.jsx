import React, { Component } from 'react';
import classNames from 'classnames';

class Pane extends Component {
  static getType() {
    return 'Pane';
  }
  render() {
    const {
      children,
      className
    } = this.props;
    const finalClassName = `tab-pane__pane ${className}`.trim();
    return (
      <div className={classNames(finalClassName)}>{children}</div>
    );
  }
}
Pane.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

Pane.defaultProps = {
  className: ''
};

export default Pane;
