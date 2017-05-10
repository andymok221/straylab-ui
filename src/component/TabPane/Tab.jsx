import React, { Component } from 'react';
import classNames from 'classnames';

class Tab extends Component {
  static getType() {
    return 'Tab';
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(tab) {
    return () => {
      this.props.setActive(tab);
      if (this.props.onClick) {
        this.props.onClick(tab);
      }
    };
  }

  render() {
    const {
      children,
      tab,
      activeTab,
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
      <li onClick={this.onClick(tab)} className={classNames(finalClassName, { active: activeTab === tab })}>{children}</li>
    );
  }
}

Tab.propTypes = {
  children: React.PropTypes.node.isRequired,
  tab: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  activeTab: React.PropTypes.string,
  setActive: React.PropTypes.func,
  className: React.PropTypes.string
};

Tab.defaultProps = {
  activeTab: undefined,
  onClick: undefined,
  disabled: false,
  setActive: undefined,
  className: ''
};

export default Tab;
