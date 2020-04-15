import * as React from 'react';

interface StaticContainerProps {
  shouldUpdate: boolean;
}

class StaticContainer extends React.Component<StaticContainerProps, {}> {
  shouldComponentUpdate(nextProps: StaticContainerProps): boolean {
    return !!nextProps.shouldUpdate;
  }
  render() {
    const child = this.props.children;

    if (child === null || child === false) {
      return null;
    }

    return React.Children.only(child);
  }
}

export default StaticContainer;
