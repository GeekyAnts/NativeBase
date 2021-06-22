import React from 'react';
import { VStack, Switch } from 'native-base';
import { select, boolean } from '@storybook/addon-knobs';

export const Example = () => {
  return (
    <VStack space={50}>
      <Switch
        // @ts-ignore
        onColor="seagreen"
        // isChecked={boolean(
        //   'isChecked',
        //   false
        // )}
        size={select('size', ['sm', 'md', 'lg'], 'sm')}
        isDisabled={boolean('isDisabled', false)}
        isInvalid={boolean('isInvalid', false)}
      />
      <Switch
        size="md"
        // @ts-ignore
        onColor="seagreen"
        offColor="red"
        name="switch-sample"
        onToggle={(val: any) => console.log('button toggle value', val)}
        iosBgColor="#f8d7d9"
      />
      <Switch
        size="lg"
        // @ts-ignore
        onColor="seagreen"
        offColor="red"
        defaultIsChecked={true}
        // switchTrackColor="#f8d7d9"
      />
    </VStack>
  );
};
