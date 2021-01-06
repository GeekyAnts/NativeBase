import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, StyleSheet } from 'react-native';
import { extendTheme, themeTools } from 'native-base';
import Basic from './Basic';
import DefaultMode from './DefaultMode';

storiesOf('Mode', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <View style={styles.wrapper}>{getStory()}</View>
  ))
  .add('Basic', () => <Basic />)
  .add('DefaultMode', () => <DefaultMode />);

const styles = StyleSheet.create({
  wrapper: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 },
});
