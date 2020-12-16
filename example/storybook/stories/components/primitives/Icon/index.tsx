import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Basic from './Basic';
import CustomIcon from './CustomIcon';
import CreateIcon from './CreateIcon';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('CustomIcon', () => <CustomIcon />)
  .add('CreateIcon', () => <CreateIcon />);
