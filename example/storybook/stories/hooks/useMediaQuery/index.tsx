import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../components/Wrapper';
import MinWidth from './min-width';
import MaxHeight from './max-height';
import Orientation from './orientation';

storiesOf('useMediaQuery', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('MinWidth', () => <MinWidth />)
  .add('MaxHeight', () => <MaxHeight />)
  .add('Orientation', () => <Orientation />);
