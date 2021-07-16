const baseStyle = {
  width: 'auto',
  height: 'auto',
  display: 'flex',
  flexDirection: 'row',
};
const defaultProps = {
  direction: 'row',
  wrap: 'wrap',
};

export const Breadcrumb = {
  baseStyle,
  defaultProps,
};

export const BreadcrumbText = {
  baseStyle: { ...baseStyle, _current: { fontWeight: 'bold' } },
  defaultProps,
};
