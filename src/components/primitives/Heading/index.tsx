import React, { memo, forwardRef } from 'react';
import Text from '../Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IHeadingProps } from './types';
import { getThemeProps } from '../../../utils/static/styled';
import { useColorMode } from '../../../core/color-mode';

import { useNativeBase } from '../../../hooks';
import { useNativeBaseConfig } from '../../../core/NativeBaseContext';
import { Platform } from 'react-native';

const Heading = (props: IHeadingProps, ref: any) => {
  //@ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { size, ...resolvedProps } = usePropsResolution('Heading', props, {});

  const { colorMode } = useColorMode();
  const { theme } = useNativeBase();
  const providerId = useNativeBaseConfig('NativeBase').providerId;

  const { styleFromProps } = getThemeProps(theme, providerId, 'Heading', {
    colorMode,
    platform: Platform.OS,
  });

  return (
    <Text
      {...resolvedProps}
      ref={ref}
      fontFamily={props.fontFamily ?? styleFromProps?.fontFamily}
      fontWeight={props.fontWeight ?? styleFromProps?.fontWeight}
      fontStyle={props.fontStyle ?? styleFromProps.fontStyle}
    />
  );
};

export default memo(forwardRef(Heading));
export type { IHeadingProps };
