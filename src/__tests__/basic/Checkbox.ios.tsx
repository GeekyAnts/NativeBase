import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Content } from '../../basic/Content';
import { ListItem } from '../../basic/ListItem';
import { CheckBox } from '../../basic/Checkbox';
import { Body } from '../../basic/Body';
import { Text } from '../../basic/Text';

it('renders checkbox', () => {
  const tree = renderer
    .create(
      <Content>
        <ListItem button>
          <CheckBox checked={true} />
          <Body>
            <Text>Lunch Break</Text>
          </Body>
        </ListItem>
        <ListItem button>
          <CheckBox color="red" checked={false} />
          <Body>
            <Text>Daily Stand Up</Text>
          </Body>
        </ListItem>
      </Content>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
