import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { CustomButtonScreen } from './custompressablescreen';
import { NativeBaseScreen } from './nativebase';
import { RNButtonScreen } from './reactnativescreen';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { DripsyProvider, makeTheme } from 'dripsy';

console.currentKey = {};
const theme = makeTheme({});

console.startTimeKey = function (key) {
  console.currentKey[key] = Date.now();
};

console.endTimeKey = function (key, msg) {
  console.log(msg, key, Date.now() - console.currentKey[key]);

  // if (console.currentKey[key]) {
  //   delete console.currentKey[key];
  // }
};

export default function App() {
  const [nativeBaseIsOn, setNativeBaseIsOn] = useState(false);
  const [customIsOn, setCustomIsOn] = useState(false);
  const [rnButtonIsOn, setRNButtonIsOn] = useState(true);
  return (
    <>
      {/* <Switch
        value={rnButtonIsOn}
        onChange={() => setRNButtonIsOn(!rnButtonIsOn)}
      />
      <Text>RN Button</Text>
      <Switch value={customIsOn} onChange={() => setCustomIsOn(!customIsOn)} />
      <Text>Custom Button</Text>
      <Switch
        value={nativeBaseIsOn}
        onChange={() => setNativeBaseIsOn(!nativeBaseIsOn)}
      />
      <Text>Nativebase Button</Text> */}
      <View style={styles.container}>
        {/* {rnButtonIsOn && <RNButtonScreen />}
        {customIsOn && <CustomButtonScreen />}
        {nativeBaseIsOn && <NativeBaseScreen />} */}
        <NativeBaseProvider
          theme={extendTheme({
            // config: { initialColorMode: 'dark' },
            components: {
              Pressable: {
                bg: 'amber.400',
              },
            },
          })}
        >
          <DripsyProvider theme={theme}>
            <NativeBaseScreen />
          </DripsyProvider>
        </NativeBaseProvider>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
