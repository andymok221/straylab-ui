import React, { Component } from 'react';

class Tag extends Component {
  render() {
    const { primary, secondary, color, className, children } = this.props;
    let tagType = '';
    let tagColor = '';
    if (primary) {
      tagType = 'tag--primary';
    } else if (secondary) {
      tagType = 'tag--secondary';
    } else if (color) {
      tagColor = `tag--color-${color}`;
    }
    const finalClassName = `tag ${tagType} ${tagColor} ${className}`.trim();
    return (
      <div className={finalClassName}>
        {children}
      </div>
    );
  }
}

Tag.propTypes = {
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  className: React.PropTypes.string,
  color: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

Tag.defaultProps = {
  primary: undefined,
  secondary: undefined,
  className: '',
  color: 'gray',
};

export default Tag;
