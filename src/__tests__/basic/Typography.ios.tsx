import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Content } from '../../basic/Content';
import { H1 } from '../../basic/H1';
import { H2 } from '../../basic/H2';
import { H3 } from '../../basic/H3';
import { Text } from '../../basic/Text';

it('renders Typography', () => {
  const tree = renderer
    .create(
      <Content>
        <H1>Header One</H1>
        <H2>Header Two</H2>
        <H3>Header Three</H3>
        <Text>Default</Text>
      </Content>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
