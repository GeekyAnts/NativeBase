import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Playground } from './knobEnabled';
import { Example as Usage } from './usage';
import { Example as Size } from './size';
import { Example as Fallback } from './Fallback';
import { Example as AvatarBadge } from './AvatarBadge';
import { Example as AvatarGroup } from './AvatarGroup';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Size', () => <Size />)
  .add('Fallback', () => <Fallback />)
  .add('AvatarBadge', () => <AvatarBadge />)
  .add('AvatarGroup', () => <AvatarGroup />);
