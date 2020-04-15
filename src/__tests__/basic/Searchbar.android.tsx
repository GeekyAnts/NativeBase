import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Container } from '../../basic/Container';
import { Header } from '../../basic/Header';
import { Item } from '../../basic/Item';
import { Icon } from '../../basic/Icon';
import { Input } from '../../basic/Input';
import { Button } from '../../basic/Button';
import { Text } from '../../basic/Text';
// Note: test renderer must be required after react-native.
it('renders searchbar', () => {
  const tree = renderer
    .create(
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
            <Icon active name="people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
