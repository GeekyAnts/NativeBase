import { Component } from 'react';
type NativeBaseComponentProps = {
  theme?: object;
};

export default class NativeBaseComponent<P = {}, S = {}> extends Component<NativeBaseComponentProps & P, S> {
  getChildContext() {
    return {
      theme: this.props.theme ? this.props.theme : this.context.theme,
    };
  }
  getContextForegroundColor() {
    return this.context.foregroundColor;
  }
}
