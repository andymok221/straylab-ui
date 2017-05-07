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
    const self = this;
    return function () {
      self.setState({
        activeTab: tab
      });
    };
  }
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="tab-pane">
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
  defaultActiveTab: React.PropTypes.string
};

TabPane.defaultProps = {
  defaultActiveTab: undefined
};

TabPane.Tab = Tab;
TabPane.Pane = Pane;

export default TabPane;
