import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Playground from './knobEnabled';
import Usage from './usage';
import Size from './size';
import Fallback from './Fallback';
import AvatarBadge from './AvatarBadge';
import AvatarGroup from './AvatarGroup';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Size', () => <Size />)
  .add('Fallback', () => <Fallback />)
  .add('AvatarBadge', () => <AvatarBadge />)
  .add('AvatarGroup', () => <AvatarGroup />);
