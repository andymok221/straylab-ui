import React from 'react';

const GridColumn = ({
  xs,
  sm,
  md,
  lg,
  children,
  className
}) => {
  let xsClass = '';
  let smClass = '';
  let mdClass = '';
  let lgClass = '';
  if (xs) xsClass = `col-xs-${xs}`;
  if (sm) smClass = `col-sm-${sm}`;
  if (md) mdClass = `col-md-${md}`;
  if (lg) lgClass = `col-sm-${lg}`;
  const finalClassName = `${xsClass} ${smClass} ${mdClass} ${lgClass} ${className}`.trim();
  return (
    <div className={finalClassName}>
      {children}
    </div>
  );
};

GridColumn.propTypes = {
  xs: React.PropTypes.number,
  sm: React.PropTypes.number,
  md: React.PropTypes.number,
  lg: React.PropTypes.number,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]).isRequired,
  className: React.PropTypes.string
};

GridColumn.defaultProps = {
  xs: 12,
  sm: undefined,
  md: undefined,
  lg: undefined,
  className: ''
};

export default GridColumn;
