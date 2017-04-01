import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class Tooltip extends Component {
  componentDidMount() {
    this.initToolTip();
  }
  componentDidUpdate() {
    this.destroyTooltip();
    this.initToolTip();
  }
  componentWillUnmount() {
    this.destroyTooltip();
  }
  initToolTip() {
    let content = this.props.content;
    if (typeof this.props.content !== 'string') {
      content = ReactDOMServer.renderToString(content);
    }
    this.tooltip = new TetherTooltip({
      target: this.trigger,
      content,
      classes: 'tooltip-theme-arrows',
      position: this.props.position,
      openOn: this.props.openOn
    });
  }
  destroyTooltip() {
    if (this.tooltip) this.tooltip.destroy();
  }
  render() {
    const {
      trigger
    } = this.props;
    return React.cloneElement(trigger, {
      ref: (triggerElm) => {
        if (typeof trigger.type === 'string') {
          this.trigger = triggerElm;
        } else {
          this.trigger = ReactDom.findDOMNode(triggerElm);
        }
      }
    });
  }
}

Tooltip.propTypes = {
  openOn: React.PropTypes.string,
  position: React.PropTypes.string,
  content: React.PropTypes.node.isRequired,
  trigger: React.PropTypes.node.isRequired
};

Tooltip.defaultProps = {
  openOn: 'hover',
  position: 'top center'
};

export default Tooltip;
