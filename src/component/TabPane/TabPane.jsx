import React, { Component } from 'react';
import Tab from './Tab';
import Pane from './Pane';

class TabPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.defaultActiveTab
    };
    this.setActive = this.setActive.bind(this);
  }
  setActive(tab) {
    return () => {
      this.setState({
        activeTab: tab
      });
    };
  }
  render() {
    const {
      children,
      className
    } = this.props;
    const finalClassName = `tab-pane ${className}`.trim();
    return (
      <div className={finalClassName}>
        <ul className="tab-pane__tabs">
          {React.Children.map(children, (child) => {
            if (child.type.getType() === 'Tab') {
              return React.cloneElement(child, { setActive: this.setActive, activeTab: this.state.activeTab });
            }
            return null;
          })}
        </ul>
        {React.Children.map(children, (child) => {
          if (child.type.getType() === 'Pane') {
            return React.cloneElement(child, { activeTab: this.state.activeTab });
          }
          return null;
        })}
      </div>
    );
  }
}

TabPane.propTypes = {
  children: React.PropTypes.node.isRequired,
  defaultActiveTab: React.PropTypes.string,
  className: React.PropTypes.string
};

TabPane.defaultProps = {
  defaultActiveTab: undefined,
  className: ''
};

TabPane.Tab = Tab;
TabPane.Pane = Pane;

export default TabPane;
