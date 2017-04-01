import React, { Component } from 'react';

class Progress extends Component {
  render() {
    let {
      id,
      primary,
      secondary,
      color,
      className,
      percentage
    } = this.props;
    let progressType = '';
    let progressColor = '';
    if (primary) {
      progressType = 'progress--primary';
    } else if (secondary) {
      progressType = 'progress--secondary';
    } else if (color) {
      progressColor = `progress--color--${color}`;
    }
    const finalClassName = `progress ${progressType} ${progressColor} ${className}`.trim();
    return (
      <div
        id={id}
        className={finalClassName}
      >
        <div style={{ width: `${percentage}%` }} className="progress__bar" />
      </div>
    );
  }
}

Progress.propTypes = {
  id: React.PropTypes.string,
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  color: React.PropTypes.string,
  className: React.PropTypes.string,
  percentage: React.PropTypes.number
};

Progress.defaultProps = {
  id: undefined,
  primary: undefined,
  secondary: undefined,
  color: undefined,
  className: '',
  percentage: 0
};

export default Progress;
