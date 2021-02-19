import React from 'react';
import { Picker as RNPicker } from '@react-native-picker/picker';
import styled from 'styled-components/native';
import {
  border,
  flex,
  space,
  color,
  flexbox,
  layout,
  typography,
} from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
} from '../../../utils/customProps';
import { SelectContext } from './Context';
import type { IPickerProps } from './types';
import { useThemeProps } from '../../../hooks';
import { Platform } from 'react-native';
import { useHover } from '@react-native-aria/interactions';

const StyledPicker = styled(RNPicker)<IPickerProps>(
  flex,
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customTypography,
  customLayout
);

const Picker = ({ children, ...props }: IPickerProps, ref: any) => {
  const {
    isDisabled,
    isInvalid,
    _item,
    _ios,
    _android,
    _web,
    _isInvalid,
    _hover,
    ...newProps
  } = useThemeProps('Picker', props);
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, ref ?? _ref);

  return (
    <SelectContext.Provider
      value={{
        isPicker: true,
      }}
    >
      <StyledPicker
        // Not getting ref on web
        ref={ref ?? _ref}
        enabled={!isDisabled}
        itemStyle={_item}
        {...newProps}
        {...(Platform.OS === 'ios' && _ios)}
        {...(Platform.OS === 'android' && _android)}
        {...(Platform.OS === 'web' && _web)}
        {...(isInvalid && _isInvalid)}
        {...(isHovered && _hover)}
      >
        {children}
      </StyledPicker>
    </SelectContext.Provider>
  );
};

export default React.memo(React.forwardRef<any, IPickerProps>(Picker));
