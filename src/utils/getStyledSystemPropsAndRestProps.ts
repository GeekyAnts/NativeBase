import { propConfig } from '../theme/styled-system';
/**
 * Common Logic Sharing between useSx and useStyledSystemPropResolver
 * @param props
 * @returns { styledSystemProps, restProps }
 */
export const getStyledSystemPropsAndRestProps = (props: any) => {
  const styledSystemProps: any = {};
  const restProps: any = {};

  for (let key in props) {
    if (key in propConfig) {
      styledSystemProps[key] = props[key];
    } else {
      restProps[key] = props[key];
    }
  }

  return { styledSystemProps, restProps };
};
