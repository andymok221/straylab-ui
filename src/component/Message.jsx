import React, { Component } from 'react';

class Message extends Component {
  render() {
    const {
      primary,
      secondary,
      color,
      header,
      className,
      children
    } = this.props;
    let messageType = '';
    let messageColor = '';
    if (primary) {
      messageType = 'message--primary';
    } else if (secondary) {
      messageType = 'message--secondary';
    } else if (color) {
      messageColor = `message--color-${color}`;
    }
    const finalClassName = `message ${messageType} ${messageColor} ${className}`.trim();
    return (
      <div className={finalClassName}>
        {!!header &&
        <div className="message__header">
          {header}
        </div>
        }
        {children}
      </div>
    );
  }
}

Message.propTypes = {
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  color: React.PropTypes.string,
  header: React.PropTypes.string,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

Message.defaultProps = {
  primary: undefined,
  secondary: undefined,
  color: undefined,
  header: undefined,
  className: ''
};

export default Message;
