import React, { Component } from 'react';

class OffCanvas extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }
  onClick(event) {
    if (this.props.direction === 'left') {
      if (
        !this.wrapper.contains(event.target) &&
        this.wrapper.getBoundingClientRect().left === 0
      ) {
        this.props.onClose();
      }
    } else {
      if (
        !this.wrapper.contains(event.target) &&
        this.wrapper.getBoundingClientRect().right === document.documentElement.clientWidth
      ) {
        this.props.onClose();
      }
    }
  }
  render() {
    const { className, children, direction } = this.props;
    let style = {};
    let offCanvasStateClass = '';
    if (this.props.open) {
      offCanvasStateClass = 'off-canvas--open';
      style.transform = 'translate(0)';
    } else {
      offCanvasStateClass = 'off-canvas--close';
      if (direction === 'left') {
        style.transform = 'translate(-100%)';
      } else {
        style.transform = 'translate(100%)';
      }
    }
    const finalClassName = `off-canvas--${direction} ${offCanvasStateClass} ${className}`.trim();
    return (
      <div
        style={style}
        ref={node => (this.wrapper = node)}
        className={finalClassName}
      >
        {children}
      </div>
    );
  }
}

OffCanvas.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onClose: React.PropTypes.func.isRequired,
  className: React.PropTypes.string,
  direction: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

OffCanvas.defaultProps = {
  className: '',
  direction: 'left',
};

export default OffCanvas;
