import React from 'react';
import { useStyledSystemPropsResolver } from '../hooks/';

export const makeStyledComponent = (Comp: any) => {
  return React.forwardRef(({ debug, ...props }: any, ref: any) => {
    const [style, restProps] = useStyledSystemPropsResolver(props);
    if (process.env.NODE_ENV === 'development' && debug) {
      /* eslint-disable-next-line */
      console.log(
        `%cstyleSystem`,
        'background: #4b5563; color: #d97706; font-weight: 700; padding: 2px 8px;'
      );
      /* eslint-disable-next-line */
      console.log('%c props: ', 'color: #4ade80; font-weight: 700;', props);
      /* eslint-disable-next-line */
      console.log('%c style: ', 'color: #22d3ee; font-weight: 700;', style);
      /* eslint-disable-next-line */
      console.log(
        '%c restProps: ',
        'color: #22d3ee; font-weight: 700;',
        restProps
      );
    }
    return (
      <Comp {...restProps} style={style} ref={ref}>
        {props.children}
      </Comp>
    );
  });
};
