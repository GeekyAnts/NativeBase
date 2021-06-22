import React from 'react';
import { Button, HStack, VStack, Text, Input, useClipboard } from 'native-base';

export const Example = () => {
  const [copyText, setCopyText] = React.useState('Copy Me');
  const [pasteText, setPasteText] = React.useState('');
  const { value, onCopy, hasCopied } = useClipboard();
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
      <VStack space={3}>
        <Text>{hasCopied ? 'Copied' : 'Press here'}</Text>
        <Input
          w="60%"
          placeholder="Paste To"
          onChangeText={(v) => setPasteText(v)}
          value={pasteText}
        />
        <Button onPress={() => setPasteText(value)}>Paste</Button>
      </VStack>
    </VStack>
  );
};
