import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import { Example as ToastPositions } from './ToastPositions';
import { Example as ToastVariants } from './ToastVariants';
import { Example as Basic } from './Basic';
import { Example as HideToast } from './HideToast';
import { Example as CustomComponent } from './CustomComponent';
import { Example as PreventDuplicate } from './PreventDuplicate';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Toast Variants', () => <ToastVariants />)
  .add('Basic', () => <Basic />)
  .add('Toast Positions', () => <ToastPositions />)
  .add('Custom Component', () => <CustomComponent />)
  .add('Custom Id', () => <HideToast />)
  .add('Prevent Duplicate', () => <PreventDuplicate />);
