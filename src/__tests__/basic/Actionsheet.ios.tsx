import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../../basic/Button';
import { ActionSheetContainerComponent } from '../../basic/Actionsheet';
import { Text } from '../../basic/Text';
var BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

it('renders ActionSheet', () => {
  const tree = renderer
    .create(
      <Button
        onPress={() =>
          ActionSheetContainerComponent.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              title: 'Select an option',
            },
            buttonIndex => {
              this.setState({ clicked: BUTTONS[buttonIndex] });
            }
          )
        }
      >
        <Text>Actionsheet</Text>
      </Button>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
