import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import {
  DefaultLink,
  ExternalLink,
  CustomOnClick,
  CompositeLink,
} from './example';

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Default Link', () => <DefaultLink />)
  .add('External Link', () => <ExternalLink />)
  .add('Custom Function onPress Link', () => <CustomOnClick />)
  .add('Composite Link Example', () => <CompositeLink />);
