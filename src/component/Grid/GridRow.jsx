import React from 'react';

const GridRow = ({
  children,
  className
}) => {
  const finalClassName = `row ${className}`.trim();
  return (
    <div className={finalClassName}>
      {children}
    </div>
  );
};

GridRow.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node,
    React.PropTypes.element,
  ]).isRequired
};

GridRow.defaultProps = {
  className: ''
};

export default GridRow;
