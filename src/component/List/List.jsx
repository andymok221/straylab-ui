import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  render() {
    const {
      ordered,
      highlight,
      className = '',
      children
    } = this.props;
    const Elm = ordered ? 'ol' : 'ul';
    let additionalClass = '';
    if (highlight) additionalClass += 'list--highlight';
    const finalClassName = `list ${additionalClass} ${className}`.trim();
    return (
      <Elm className={finalClassName}>
        {children}
      </Elm>
    );
  }
}

List.propTypes = {
  className: React.PropTypes.string,
  ordered: React.PropTypes.bool,
  highlight: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired
};

List.defaultProps = {
  className: '',
  ordered: undefined,
  highlight: undefined
};

List.Item = ListItem;

export default List;
