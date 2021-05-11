import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import { Example as ToastPositions } from './ToastPositions';
import { Example as ToastVariants } from './ToastVariants';
import { Example as Basic } from './Basic';
import { Example as CloseToast } from './CloseToast';
import { Example as CustomComponent } from './CustomComponent';
import { Example as PreventDuplicate } from './PreventDuplicate';
import { Example as ToastStatus } from './ToastStatus';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic', () => <Basic />)
  .add('Toast Positions', () => <ToastPositions />)
  .add('Custom Component', () => <CustomComponent />)
  .add('CloseToast', () => <CloseToast />)
  .add('Prevent Duplicate', () => <PreventDuplicate />)
  .add('Status', () => <ToastStatus />)
  .add('Toast Variants', () => <ToastVariants />);
