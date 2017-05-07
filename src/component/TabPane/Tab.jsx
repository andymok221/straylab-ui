import React, { Component } from 'react';
import className from 'classnames';

class Tab extends Component {
  render() {
    const {
      children,
      tab,
      activeTab,
      setActive
    } = this.props;
    return (
      <li onClick={setActive(tab)} className={className('tab-pane__tab', { active: activeTab === tab })}>{children}</li>
    );
  }
}

Tab.propTypes = {
  children: React.PropTypes.node.isRequired,
  tab: React.PropTypes.string.isRequired,
  activeTab: React.PropTypes.string,
  setActive: React.PropTypes.func
};

Tab.defaultProps = {
  activeTab: undefined,
  setActive: undefined
};

export default Tab;
