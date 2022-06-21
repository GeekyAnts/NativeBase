import { useStyledSystemPropsResolver } from '../hooks/useStyledSystemPropsResolver';
import React from 'react';

export const makeStyledComponent = (
  Comp: any
  // componentName: keyof ITheme['components']
) => {
  //TODO: component theme
  // return <> </>;

  // const globalLightStyle = getStyledComponent(componentName, 'light');
  // const globalDarkStyle = getStyledComponent(componentName, 'dark');

  // console.log(StyleSheet.flatten(globalLightStyle.style), 'hello style');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return React.forwardRef(({ debug, ...props }: any, ref: any) => {
    // console.log(props, 'hello props **********');
    const [style, restProps] = useStyledSystemPropsResolver(props);

    if (props.hello) {
      console.log(
        props,
        style,
        // restProps,
        // Comp,
        ' props here &&&*** box component'
      );
    }

    return (
      <Comp {...restProps} style={style} ref={ref}>
        {props.children}
      </Comp>
    );
  });
};
