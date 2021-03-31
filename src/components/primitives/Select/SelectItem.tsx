import React from 'react';
import type { ISelectItemProps } from './types';
import { Platform } from 'react-native';
import { Actionsheet } from '../../composites/Actionsheet';
import { SelectContext } from './Select';
import Icon from '../Icon';
import HStack from '../Stack/HStack';
import Box from '../Box';

export const Item = ({
  isDisabled,
  label,
  value,
  ...props
}: ISelectItemProps) => {
  const { onValueChange, selectedValue, closeMenu } = React.useContext(
    SelectContext
  );
  if (Platform.OS !== 'web') {
    const isSelected = selectedValue === value;

    return (
      <Actionsheet.Item
        {...props}
        onPress={() => {
          if (!isDisabled) {
            onValueChange(value);
            closeMenu && closeMenu();
          }
        }}
        // endIcon={
        //   isSelected ? <Icon type="MaterialIcons" name="check" /> : <></>
        // }
        accessibilityState={{ selected: isSelected }}
      >
        <HStack space={4} alignItems="center">
          <Box>{label}</Box>
          <Box>
            {isSelected ? <Icon type="MaterialIcons" name="check" /> : <></>}
          </Box>
        </HStack>
      </Actionsheet.Item>
    );
  } else {
    return <option label={label} value={value} />;
  }
};

export default React.memo(Item);
