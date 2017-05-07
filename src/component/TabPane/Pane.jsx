import React, { Component } from 'react';
import className from 'classnames';

class Pane extends Component {
  render() {
    const {
      children,
      tab,
      activeTab
    } = this.props;
    return (
      <div className={className('tab-pane__pane', { hidden: activeTab !== tab })}>{children}</div>
    );
  }
}
Pane.propTypes = {
  children: React.PropTypes.node.isRequired,
  tab: React.PropTypes.string.isRequired,
  activeTab: React.PropTypes.string
};

Pane.defaultProps = {
  activeTab: undefined
};

export default Pane;
