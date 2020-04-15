import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Content } from '../../basic/Content';
import { Thumbnail } from '../../basic/Thumbnail';

const cover = require('../assets/drawer-cover.png');

it('renders default shape thumbnail', () => {
  const tree = renderer
    .create(
      <Content>
        <Thumbnail small source={cover} />
        <Thumbnail source={cover} />
        <Thumbnail large source={cover} />
      </Content>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders square shape thumbnail', () => {
  const tree = renderer
    .create(
      <Content>
        <Thumbnail square small source={cover} />
        <Thumbnail square source={cover} />
        <Thumbnail square large source={cover} />
      </Content>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
