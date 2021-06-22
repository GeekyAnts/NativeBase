import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, StyleSheet } from 'react-native';
import { Example as Basic } from './Basic';
import { Example as DefaultMode } from './DefaultMode';
import { Example as Persistence } from './Persistence';

storiesOf('Mode', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <View style={styles.wrapper}>{getStory()}</View>
  ))
  .add('Basic', () => <Basic />)
  .add('DefaultMode', () => <DefaultMode />)
  .add('Persistence', () => <Persistence />);

const styles = StyleSheet.create({
  wrapper: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 },
});
