import _ from 'lodash';

const mapPropsToStyleNames = (styleNames, props) => {
  const keys = _.keys(props);
  const values = _.values(props);

  _.forEach(keys, (key, index) => {
    if (values[index]) {
      styleNames.push(key);
    }
  });

  return styleNames;
};

export default mapPropsToStyleNames;
