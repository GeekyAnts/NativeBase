import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';

import Basic from './Basic';
import Callback from './Callback';
import Duration from './Duration';

storiesOf('Collapse', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Animation Duration', () => <Duration />)
  .add('onAnimationStart and onAnimationEnd', () => <Callback />);
