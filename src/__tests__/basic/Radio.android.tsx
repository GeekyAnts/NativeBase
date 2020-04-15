import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Content } from '../../basic/Content';
import { ListItem } from '../../basic/ListItem';
import { Left } from '../../basic/Left';
import { Right } from '../../basic/Right';
import { Text } from '../../basic/Text';
import { Radio } from '../../basic/Radio';
// Note: test renderer must be required after react-native.
jest.mock('react-native/Libraries/Utilities/Platform.android', () => {
  const Platform = require.requireActual('react-native/Libraries/Utilities/Platform.android');

  Platform.OS = 'android';

  return Platform;
});
it('renders default radio', () => {
  const tree = renderer
    .create(
      <Content>
        <ListItem selected={true}>
          <Left>
            <Text>Lunch Break</Text>
          </Left>
          <Right>
            <Radio selected={true} />
          </Right>
        </ListItem>
        <ListItem selected={false}>
          <Left>
            <Text>Daily Stand Up</Text>
          </Left>
          <Right>
            <Radio selected={false} />
          </Right>
        </ListItem>
      </Content>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders custom radio', () => {
  const tree = renderer
    .create(
      <Content>
        <ListItem selected={true}>
          <Left>
            <Text>Lunch Break</Text>
          </Left>
          <Right>
            <Radio selected={true} color={'#f0ad4e'} selectedColor={'#5cb85c'} />
          </Right>
        </ListItem>
        <ListItem selected={false}>
          <Left>
            <Text>Daily Stand Up</Text>
          </Left>
          <Right>
            <Radio selected={false} color={'#f0ad4e'} selectedColor={'#5cb85c'} />
          </Right>
        </ListItem>
      </Content>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
