import React from 'react';
import ListItem from './ListItem';

const List = ({
  ordered,
  highlight,
  className = '',
  children
}) => {
  const Elm = ordered ? 'ol' : 'ul';
  let additionalClass = '';
  if (highlight) additionalClass += 'list--highlight';
  const finalClassName = `list ${additionalClass} ${className}`.trim();
  return (
    <Elm className={finalClassName}>
      {children}
    </Elm>
  );
};

List.Item = ListItem;

export default List;
