const defaultProps = {
  placeholder: '○',
  size: 'md',
  manageFocus: true,
  space: 1,
};

const sizes = {
  '2xl': {
    fontSize: '2xl',
    p: 3,
    width: '56px',
    height: '56px',
    textAlign: 'center',
    borderRadius: 'lg',
  },
  'xl': {
    fontSize: 'xl',
    p: 3,
    width: '52px',
    height: '52px',
    textAlign: 'center',
    borderRadius: 'lg',
  },
  'lg': {
    fontSize: 'lg',
    p: 2,
    width: '48px',
    height: '48px',
    textAlign: 'center',
    borderRadius: 'md',
  },
  'md': {
    fontSize: 'md',
    p: 2,
    width: '40px',
    height: '40px',
    textAlign: 'center',
    borderRadius: 'md',
  },
  'sm': {
    fontSize: 'sm',
    p: 1,
    width: '30px',
    height: '30px',
    textAlign: 'center',
    borderRadius: 'md',
  },
  'xs': {
    fontSize: 'xs',
    p: 1,
    width: '24px',
    height: '24px',
    textAlign: 'center',
    borderRadius: 'md',
  },
};

export default {
  sizes,
  defaultProps,
};
