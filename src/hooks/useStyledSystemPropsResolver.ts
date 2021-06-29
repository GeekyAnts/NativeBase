import { useTheme } from './useTheme';
import { resolversForBox } from '../utils/styled';

export const useStyledSystemPropsResolver = (props: any) => {
  const theme = useTheme();
  const propsWithTheme = { ...props, theme };
  let styleObject: any = {};
  resolversForBox.forEach((resolver: any) => {
    styleObject = { ...styleObject, ...resolver(propsWithTheme) };
  });

  for (const property in styleObject) {
    if (
      typeof styleObject[property] === 'string' &&
      styleObject[property].includes('px')
    ) {
      styleObject[property] = parseInt(styleObject[property]);
    }
  }

  return styleObject;
};
