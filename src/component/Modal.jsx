import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyPress);
    document.addEventListener('click', this.onClick);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      if (nextProps.open) {
        this.openModal();
      } else {
        this.closeModal();
      }
    }
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyPress);
    document.removeEventListener('click', this.onClick);
  }
  onClick(event) {
    if (!this.wrapper || !this.content) return;
    if (this.wrapper.contains(event.target) && !this.content.contains(event.target)) {
      if (this.props.onClose) this.props.onClose();
    }
  }
  onKeyPress(e) {
    if (e.key === 'Escape' && this.props.escClose && this.props.onClose) this.props.onClose();
  }
  closeModal() {
    document.querySelector('body').className = document.querySelector('body').className.replace(/modal-open/g, '');
  }
  openModal() {
    document.querySelector('body').className += ' modal-open';
  }
  render() {
    const {
      open,
      size = 'sm',
      className = '',
      children
    } = this.props;
    if (open) {
      let modalSize = '';
      if (size) modalSize = `modal--${size}`;
      const finalClassName = `modal ${modalSize} ${className}`.trim();
      return (
        <div ref={node => (this.wrapper = node)} className="backdrop">
          <div ref={node => (this.content = node)} className={finalClassName}>
            {children}
          </div>
        </div>
      );
    }
    return null;
  }
}

Modal.propTypes = {
  size: React.PropTypes.string,
  className: React.PropTypes.string,
  open: React.PropTypes.bool.isRequired,
  onClose: React.PropTypes.func,
  escClose: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired
};

Modal.defaultProps = {
  primary: false,
  secondary: false,
  color: undefined,
  size: 'sm',
  className: '',
  onClose: undefined,
  escClose: true
};

export default Modal;
