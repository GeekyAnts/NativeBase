import { Linking, Platform } from 'react-native';
import type { IUseLinkProp } from './types';
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

  let platformLinkProps = {};

  if (Platform.OS === 'web') {
    platformLinkProps = {
      href,
      target: isExternal ? '_blank' : undefined,
      onClick,
    };
  } else {
    platformLinkProps = {
      onPress: () => {
        addOnPressFunctionality(href, isExternal, onClick);
      },
    };
  }

  return {
    linkProps: {
      ...platformLinkProps,
      accessibilityRole: 'link' as AccessibilityRole,
      accessible: true,
    },
  };
}
