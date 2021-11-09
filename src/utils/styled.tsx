import React from 'react';
import { useStyledSystemPropsResolver } from '../hooks/';

export const makeStyledComponent = (Comp: any) => {
  return React.forwardRef(({ debug, ...props }: any, ref: any) => {
    const [style, restProps] = useStyledSystemPropsResolver(props);
    if (debug) {
      /* eslint-disable-next-line */
      console.log('style:: => ', style, ' restProps:: => ', restProps);
    }
    return (
      <Comp {...restProps} style={style} ref={ref}>
        {props.children}
      </Comp>
    );
  });
};
