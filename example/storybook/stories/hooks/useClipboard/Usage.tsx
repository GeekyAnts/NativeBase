import React from 'react';
import { Button, HStack, VStack, Input, useClipboard } from 'native-base';

export const Example = () => {
  const [copyText, setCopyText] = React.useState('Hello');
  const [pasteText, setPasteText] = React.useState('');
  const { value, onCopy } = useClipboard();
  return (
    <VStack space={2}>
      <HStack space={3}>
        <Input
          w="60%"
          placeholder="Copy From"
          onChangeText={(v) => setCopyText(v)}
          value={copyText}
        />
        <Button onPress={() => onCopy(copyText)}>Copy</Button>
      </HStack>
      <HStack space={3}>
        <Input
          w="60%"
          placeholder="Paste Here"
          onChangeText={(v) => setPasteText(v)}
          value={pasteText}
        />
        <Button onPress={() => setPasteText(value)}>Paste</Button>
      </HStack>
    </VStack>
  );
};
