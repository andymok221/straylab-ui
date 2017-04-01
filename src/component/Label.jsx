import React, { Component } from 'react';

class Label extends Component {
  render() {
    let {
      primary,
      secondary,
      color,
      htmlFor,
      className,
      size,
      children
    } = this.props;
    let labelType = '';
    let labelColor = '';
    if (primary) {
      labelType = 'label--primary';
    } else if (secondary) {
      labelType = 'label--secondary';
    } else if (color) {
      labelColor = `label--color-${color}`;
    }
    const finalClassName = `label label--${size} ${labelType} ${labelColor} ${className}`.trim();
    return (
      <label
        htmlFor={htmlFor}
        className={finalClassName}
      >
        {children}
      </label>
    );
  }
}

Label.propTypes = {
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  color: React.PropTypes.string,
  size: React.PropTypes.string,
  className: React.PropTypes.string,
  htmlFor: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

Label.defaultProps = {
  primary: false,
  secondary: false,
  color: undefined,
  size: 'sm',
  className: '',
  htmlFor: undefined
};

export default Label;
