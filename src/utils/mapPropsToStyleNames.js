import {
  keys as _keys,
  values as _values,
  forEach as _forEach
} from 'lodash';

const mapPropsToStyleNames = (styleNames, props) => {
  const keys = _keys(props);
  const values = _values(props);

  _forEach(keys, (key, index) => {
    if (values[index]) {
      styleNames.push(key);
    }
  });

  return styleNames;
};

export default mapPropsToStyleNames;
