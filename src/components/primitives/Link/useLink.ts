import { Linking } from 'react-native';
import type { IUseLinkProp } from './props';
import type { AccessibilityRole } from 'react-native';

const linkToHREF = (URL: string) => {
  Linking.openURL(URL).catch((err) => console.error('An error occurred', err));
};

const addOnPressFunctionality = (
  href: string | any,
  isExternal: any,
  callback: any
) => {
  href && isExternal ? linkToHREF(href) : '';
  callback ? callback() : () => {};
};

export function useLink(props: IUseLinkProp) {
  const { href, isExternal, onClick } = props;
  return {
    linkProps: {
      onPress: () => {
        addOnPressFunctionality(href, isExternal, onClick);
      },
      accessibilityRole: 'link' as AccessibilityRole,
      accessible: true,
    },
  };
}
