import React from 'react';
import { Box, Image } from 'native-base';
export default function () {
  const myRef: any = React.useRef({});
  React.useEffect(() => {
    myRef?.current.setNativeProps({ borderWidth: 10, opacity: 0.5 });
  }, [myRef]);
  return (
    <Box size={200}>
      <Image
        ref={myRef}
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
      />
    </Box>
  );
}
