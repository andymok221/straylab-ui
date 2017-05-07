import React, { Component } from 'react';
import classNames from 'classnames';

class Pane extends Component {
  static getType() {
    return 'Pane';
  }
  render() {
    const {
      children,
      tab,
      activeTab,
      className
    } = this.props;
    const finalClassName = `tab-pane__pane ${className}`.trim();
    return (
      <div className={classNames(finalClassName, { hidden: activeTab !== tab })}>{children}</div>
    );
  }
}
Pane.propTypes = {
  children: React.PropTypes.node.isRequired,
  tab: React.PropTypes.string.isRequired,
  activeTab: React.PropTypes.string,
  className: React.PropTypes.string
};

Pane.defaultProps = {
  activeTab: undefined,
  className: ''
};

export default Pane;
