import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { Example as Basic } from './Basic';
import { Example as Sizes } from './Sizes';
import { Example as AllIcons } from './AllIcons';
import { Example as CustomIcon } from './CustomIcon';
import { Example as CreateIcon } from './CreateIcon';
import { Example as ThirdPartyIcons } from './ThirdPartyIcons';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('All Icons', () => <AllIcons />)
  .add('Basic', () => <Basic />)
  .add('Sizes', () => <Sizes />)
  .add('CustomIcon', () => <CustomIcon />)
  .add('CreateIcon', () => <CreateIcon />)
  .add('Integration with Third Party Icons', () => <ThirdPartyIcons />);
