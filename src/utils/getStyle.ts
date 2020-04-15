import _ from 'lodash';

// TODO: refactor
export default function(style: any) {
  // style: PropTypes.object | PropTypes.array | PropTypes.number
  // If style is an array, merge the objects in the array
  // to get the final style
  if (_.isArray(style)) {
    return _.reduce(style, (merged, nextStyle) => ({ ...merged, ...nextStyle }), {});
  }

  return style;
}
