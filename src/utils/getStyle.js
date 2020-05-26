import {
  isArray as _isArray,
  reduce  as _reduce
} from 'lodash';

export default function (style) {
  // style: PropTypes.object | PropTypes.array | PropTypes.number

  // If style is an array, merge the objects in the array
  // to get the final style
  if (_isArray(style)) {
    return _reduce(
      style,
      (merged, nextStyle) => ({ ...merged, ...nextStyle }),
      {}
    );
  }

  return style;
};

