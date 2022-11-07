import type { IAvatarGroupProps } from '../../components/composites/Avatar/types';
function baseStyle({ isVertical }: IAvatarGroupProps) {
  return {
    flexDirection: isVertical ? 'column-reverse' : 'row-reverse',
    space: -4,
    _avatar: {
      borderWidth: 2,
    },
    _hiddenAvatarPlaceholder: {
      _text: {
        color: 'text.50',
      },
    },
    _light: {
      _avatar: {
        borderColor: 'muted.50',
      },
      _hiddenAvatarPlaceholder: {
        bg: 'gray.600',
      },
    },
    _dark: {
      _avatar: {
        borderColor: 'muted.900',
      },
      _hiddenAvatarPlaceholder: {
        bg: 'gray.600',
      },
    },
  };
}

export default {
  baseStyle,
  defaultProps: {
    isVertical: false,
  },
};
