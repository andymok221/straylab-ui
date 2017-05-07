import React, { Component } from 'react';
import classNames from 'classnames';

class Tab extends Component {
  static getType() {
    return 'Tab';
  }
  render() {
    const {
      children,
      tab,
      activeTab,
      setActive,
      className,
      disabled
    } = this.props;
    let disabledState = '';
    if (disabled) disabledState = 'tab-pane__tab--disabled';
    const finalClassName = `tab-pane__tab ${disabledState} ${className}`.trim();
    if (disabled) {
      return (
        <li className={classNames(finalClassName, { active: activeTab === tab })}>{children}</li>
      );
    }
    return (
      <li onClick={setActive(tab)} className={classNames(finalClassName, { active: activeTab === tab })}>{children}</li>
    );
  }
}

Tab.propTypes = {
  children: React.PropTypes.node.isRequired,
  tab: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool,
  activeTab: React.PropTypes.string,
  setActive: React.PropTypes.func,
  className: React.PropTypes.string
};

Tab.defaultProps = {
  activeTab: undefined,
  disabled: false,
  setActive: undefined,
  className: ''
};

export default Tab;
