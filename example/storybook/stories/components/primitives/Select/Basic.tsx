import React from 'react';
import { Box, Select, VStack } from 'native-base';

export default function () {
  let [language, setLanguage] = React.useState<string>('');
  return (
    <VStack w="80%" space={4}>
      <Select
        // variant="styled"
        // placeholder="Pick language"
        selectedValue={language}
        width={150}
        onValueChange={(itemValue: string) => setLanguage(itemValue)}
        // borderRadius="md"
        // bg="transparent"
        // color="teal.200"
        // itemStyle={{
        //   color: 'green',
        // }}
      >
        <Select.Item label="Pick something" value="" />
        <Select.Item label="JavaScript" value="js" />
        <Select.Item label="TypeScript" value="ts" />
        <Select.Item label="C" value="c" />
        <Select.Item label="Python" value="py" />
        <Select.Item label="Java" value="java" />
      </Select>
      <Box>{language}</Box>
    </VStack>
  );
}
