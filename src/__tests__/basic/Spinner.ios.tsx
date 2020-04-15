import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Container } from '../../basic/Container';
import { Spinner } from '../../basic/Spinner';

it('renders Spinner', () => {
  const tree = renderer
    .create(
      <Container>
        <Spinner />
        <Spinner color="red" />
        <Spinner color="green" />
        <Spinner color="blue" />
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
