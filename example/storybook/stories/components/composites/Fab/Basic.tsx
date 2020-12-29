import React from 'react';
import { Fab, Icon, Text, IconButton } from 'native-base';

export default function () {
  return (
    <>
      {[
        'topRight',
        'topLeft',
        // 'bottomRight', 'bottomLeft'
      ].map((pos: any) => (
        <Fab
          position={pos}
          direction="up"
          bg="purple.200"
          icon={<Icon name="plus" type="AntDesign" />}
        />
      ))}
      {[
        // 'topRight',
        // 'topLeft',
        'bottomRight',
        // 'bottomLeft',
      ].map((pos: any) => (
        <Fab
          position={pos}
          direction="up"
          bg="purple.200"
          icon={<Icon name="plus" type="AntDesign" />}
          label={<Text>Click</Text>}
        />
      ))}
      {[
        // 'topRight',
        // 'topLeft',
        // 'bottomRight',
        'bottomLeft',
      ].map((pos: any) => (
        <Fab
          position={pos}
          direction="up"
          bg="purple.200"
          label={<Text>Click</Text>}
        />
      ))}
      {[
        // 'topRight',
        // 'topLeft',
        // 'bottomRight', 'bottomLeft'
      ].map((pos: any) => (
        <Fab
          position={pos}
          direction="up"
          bg="purple.200"
          // icon={<Icon name="plus" type="AntDesign" />}
        />
      ))}
      <IconButton
        rounded={'full'}
        bg="purple.200"
        p={2}
        icon={<Icon name="plus" type="AntDesign" />}
        label={<Text fontSize="sm">Hey</Text>}
      />
    </>
  );
}
