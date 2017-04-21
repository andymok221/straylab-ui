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
  children: React.PropTypes.node
};

GridRow.defaultProps = {
  className: '',
  children: ''
};

export default GridRow;
