import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Basic from './Basic';
import Size from './Size';
import Variants from './Variants';
import WithIcon from './WithIcon';
import Custom from './Custom';

storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Variants', () => <Variants />)
  .add('Sizes', () => <Size />)
  .add('WithIcon', () => <WithIcon />)
  .add('Custom Tag', () => <Custom />);
