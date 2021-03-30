import React from 'react';
import type { ISelectItemProps } from './types';
import { Platform } from 'react-native';
import { Actionsheet } from '../../composites/Actionsheet';
import { SelectContext } from './Select';
import { Icon } from '..';

export const Item = ({
  isDisabled,
  label,
  value,
  ...props
}: ISelectItemProps) => {
  // const { parentComponentConfig } = usePopover();
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
        endIcon={
          isSelected ? <Icon type="MaterialIcons" name="check" /> : <></>
        }
        accessibilityState={{ selected: isSelected }}
      >
        {label}
      </Actionsheet.Item>
    );
  } else {
    return <option label={label} value={value} />;
  }
};

export default React.memo(Item);
