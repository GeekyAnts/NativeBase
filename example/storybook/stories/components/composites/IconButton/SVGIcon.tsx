import React from 'react';
import { IconButton, Icon, VStack } from 'native-base';
import { Path } from 'react-native-svg';

export const Example = () => {
  return (
    <VStack space={4}>
      {/* Suggested */}
      <IconButton
        variant="solid"
        onPress={() => console.log('IconButton pressed')}
        _icon={{
          viewBox: '0 0 100 100',
          size: 10,
          strokeWidth: '10',
        }}
      >
        <Icon width="100" height="100">
          <Path d="M46.667 90v-.008c-4.922 0-11.021-2.695-13.333-6.66V40c5.521 0 10-4.479 10-10V13.333A3.33 3.33 0 0 1 46.667 10C54.029 10 60 15.97 60 23.333v13.333A3.331 3.331 0 0 0 63.334 40H80c5.52 0 10 4.479 10 10v30h-.004c0 5.52-4.477 9.992-9.996 10H46.667zM10 40h16.666v43.333H10z" />
        </Icon>
      </IconButton>

      {/* Alternatively */}
      <IconButton
        variant="solid"
        onPress={() => console.log('IconButton pressed')}
        icon={
          <Icon
            width="100"
            viewBox="0 0 100 100"
            size="10"
            strokeWidth="10"
            height="100"
            color="lightBlue.600"
          >
            <Path d="M46.667 90v-.008c-4.922 0-11.021-2.695-13.333-6.66V40c5.521 0 10-4.479 10-10V13.333A3.33 3.33 0 0 1 46.667 10C54.029 10 60 15.97 60 23.333v13.333A3.331 3.331 0 0 0 63.334 40H80c5.52 0 10 4.479 10 10v30h-.004c0 5.52-4.477 9.992-9.996 10H46.667zM10 40h16.666v43.333H10z" />
          </Icon>
        }
      />
    </VStack>
  );
};
