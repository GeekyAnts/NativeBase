import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import variable from '../theme/variables/platform';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type SpinnerProps = {
  color?: string;
  inverse?: boolean;
};

class Spinner extends Component<SpinnerProps, {}> {
  render() {
    const variables = this.context.theme ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;

    return (
      <ActivityIndicator
        ref={c => (this._root = c)}
        {...this.props}
        color={
          this.props.color
            ? this.props.color
            : this.props.inverse
            ? variables.inverseSpinnerColor
            : variables.defaultSpinnerColor
        }
        size={this.props.size ? this.props.size : 'large'}
      />
    );
  }
}
const StyledSpinner = connectStyle('NativeBase.Spinner', {}, mapPropsToStyleNames)(Spinner);

export { StyledSpinner as Spinner };
