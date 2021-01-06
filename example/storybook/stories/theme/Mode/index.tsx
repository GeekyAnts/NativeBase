import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, StyleSheet } from 'react-native';
// import Basic from './Basic';
// import DefaultMode from './DefaultMode';
import Persistence from './Persistence';

storiesOf('Mode', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <View style={styles.wrapper}>{getStory()}</View>
  ))
  // .add('Basic', () => <Basic />)
  // .add('DefaultMode', () => <DefaultMode />)
  .add('Persistence', () => <Persistence />);

const styles = StyleSheet.create({
  wrapper: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 },
});
