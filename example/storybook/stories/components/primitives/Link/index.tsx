import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as DefaultLink } from './Basic';
import { Example as ExternalLink } from './ExternalLink';
import { Example as CustomOnPress } from './CustomOnPress';
import { Example as UnderlineLink } from './UnderlineLink';
import { Example as CompositeLink } from './CompositeLink';

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Default Link', () => <DefaultLink />)
  .add('External Link', () => <ExternalLink />)
  .add('Custom Function onPress Link', () => <CustomOnPress />)
  .add('Composite Link Example', () => <CompositeLink />)
  .add('Underline Link', () => <UnderlineLink />);
