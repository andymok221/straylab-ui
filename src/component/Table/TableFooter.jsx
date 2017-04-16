import React, { Component } from 'react';

class TableFooter extends Component {
  render() {
    const {
      className,
      children
    } = this.props;
    const finalClassName = `table__footer ${className}`.trim();
    return (
      <tfoot className={finalClassName}>
        {children}
      </tfoot>
    );
  }
}

TableFooter.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

TableFooter.defaultProps = {
  className: ''
};

export default TableFooter;
