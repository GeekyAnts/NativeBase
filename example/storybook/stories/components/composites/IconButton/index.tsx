import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Sizes } from './Sizes';
import { Example as Variant } from './Variant';
import { Example as SVGIcon } from './SVGIcon';
import type { StoryFn } from '@storybook/addons';

storiesOf('IconButton', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: StoryFn) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Sizes', () => <Sizes />)
  .add('Variant', () => <Variant />)
  .add('SVGIcon', () => <SVGIcon />);
