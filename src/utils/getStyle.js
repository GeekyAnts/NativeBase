import _ from 'lodash';

module.exports = function(style) {
  // style: PropTypes.object | PropTypes.array | PropTypes.number

  // If style is an array, merge the objects in the array
  // to get the final style
  if (_.isArray(style)) {
    return _.reduce(
      style,
      (merged, nextStyle) => ({ ...merged, ...nextStyle }),
      {}
    );
  }

  return style;
};
