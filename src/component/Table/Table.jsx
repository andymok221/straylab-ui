import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

class Table extends Component {
  render() {
    const {
      id,
      className = '',
      children,
      highlight
    } = this.props;
    let extraClass = '';
    if (highlight) {
      extraClass = 'table--highlight';
    }
    const finalClassName = `table ${extraClass} ${className}`.trim();
    return (
      <table
        id={id}
        className={finalClassName}
      >
        {children}
      </table>
    );
  }
}

Table.propTypes = {
  id: React.PropTypes.string,
  className: React.PropTypes.string,
  highlight: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired
};

Table.defaultProps = {
  id: undefined,
  className: '',
  highlight: undefined
};

Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Footer = TableFooter;

export default Table;
