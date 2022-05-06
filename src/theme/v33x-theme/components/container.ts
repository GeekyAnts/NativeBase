import type { Dict } from '../tools';

const baseStyle = (props: Dict) => {
  const { centerContent } = props;

  return {
    maxWidth: '80%',
    alignItems: centerContent ? 'center' : 'flex-start',
    _text: { textAlign: centerContent ? 'center' : 'left' },
  };
};

export default {
  baseStyle,
};
