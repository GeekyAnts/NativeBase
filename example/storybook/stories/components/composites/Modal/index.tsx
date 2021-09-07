import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as ModalWithAvoidKeyboard } from './ModalWithAvoidKeyboard';
import { Example as ModalRefEg } from './ModalRefEg';
import { Example as MultipleModal } from './MultipleModal';
import { Example as Size } from './Size';
import { Example as ModalPlacement } from './ModalPlacement';
import { Example as CustomBackdrop } from './CustomBackdrop';

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Multiple modal', () => <MultipleModal />)
  .add('Modal Ref Examples', () => <ModalRefEg />)
  .add('Modal Placement', () => <ModalPlacement />)
  .add('Modal with Keyboard Avoid view', () => <ModalWithAvoidKeyboard />)
  .add('Modal Size Examples', () => <Size />)
  .add('Modal Custom Backdrop', () => <CustomBackdrop />);
