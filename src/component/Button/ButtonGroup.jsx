import React, { Component } from 'react';

class ButtonGroup extends Component {
  render() {
    const {
      className,
      children
    } = this.props;
    const finalClassName = `button-group ${className}`.trim();
    return (
      <div className={finalClassName}>
        {children}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

ButtonGroup.defaultProps = {
  className: ''
};

export default ButtonGroup;
