import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';

import { connectStyle } from 'native-base-shoutem-theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Form extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props} />
    );
  }
}

Form.propTypes = {
  ...ViewPropTypes,
  style: React.PropTypes.object,
};

const StyledForm = connectStyle('NativeBase.Form', {}, mapPropsToStyleNames)(Form);

export {
  StyledForm as Form,
};
