import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Badge } from '../../basic/Badge';

it('renders regular badge', () => {
  const tree = renderer.create(<Badge>2</Badge>).toJSON();

  expect(tree).toMatchSnapshot();
});
