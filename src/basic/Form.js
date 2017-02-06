import React, { Component } from 'react';
import { View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Form extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props} />
    );
  }
}

Form.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledForm = connectStyle('NativeBase.Form', {}, mapPropsToStyleNames)(Form);

export {
  StyledForm as Form,
};
