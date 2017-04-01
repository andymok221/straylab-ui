import React, { Component } from 'react';

class OffCanvas extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { open: props.open };
  }
  componentDidMount() {
    document.addEventListener('click', this.onClick);
    if (!this.props.open) this.forceUpdate();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }
  onClick(event) {
    if (this.wrapper.getBoundingClientRect().left > -this.wrapper.getBoundingClientRect().width) {
      if (!this.wrapper.contains(event.target) && this.props.onClose) this.props.onClose();
    }
  }
  render() {
    const {
      className = '',
      children
    } = this.props;
    let style = {};
    let offCanvasStateClass = '';
    const width = this.wrapper ? this.wrapper.getBoundingClientRect().width : 0;
    if (width) style.left = `-${width}px`;
    if (this.state.open) {
      offCanvasStateClass = 'off-canvas--open';
      style.left = '0';
    } else {
      offCanvasStateClass = 'off-canvas--close';
    }
    if (width && !this.state.open) {
      style.left = `-${width}px`;
    }
    const finalClassName = `off-canvas ${offCanvasStateClass} ${className}`.trim();
    return (
      <div style={style} ref={node => (this.wrapper = node)} className={finalClassName}>
        {children}
      </div>
    );
  }
}

OffCanvas.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onClose: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

OffCanvas.defaultProps = {
  onClose: undefined,
  className: ''
};

export default OffCanvas;
