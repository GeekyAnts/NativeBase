import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Basic from './Basic';
import ModalWithAvoidKeyboard from './ModalWithAvoidKeyboard';
import ModalRefEg from './ModalRefEg';
import Size from './Size';

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Modal Size Examples', () => <Size />)
  .add('Modal Ref Examples', () => <ModalRefEg />)
  .add('Modal with Keyboard Avoid view', () => <ModalWithAvoidKeyboard />);
