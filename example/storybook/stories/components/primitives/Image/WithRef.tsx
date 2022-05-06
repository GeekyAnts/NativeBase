//@ts-nocheck
import React from 'react';
import { Center, Image } from 'native-base';

export function Example() {
  const myRef = React.useRef(null);

  React.useEffect(() => {
    if (myRef.current && myRef.current.setNativeProps) {
      const styleObj = {
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#22D3EE',
      };
      myRef?.current?.setNativeProps({
        style: styleObj,
      });
    }
  }, [myRef]);

  return (
    <Center>
      <Image
        ref={myRef}
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
        size="xl"
      />
    </Center>
  );
}
