import React from 'react';
import { Box } from 'native-base';
export const Example = () => {
  return (
    <>
      <Box
        height={{
          base: '75%', // 0-768px
          md: '50%', // 768px-1280,
          xl: '25%', // 1280px+
        }}
        bg="teal.400"
        width={[
          '75%', // 0-480px
          '50%', // 480px-768px
          '25%', // 768px-992px
          '15%', // 992px+
        ]}
      />
      {/* responsive font size */}
      <Box fontSize={['sm', 'md', 'lg', 'xl']}>Font Size</Box>
      {/* responsive margin */}
      <Box mt={[2, 4, 6, 8]} width="100%" height="24px" bg="green.400" />
      {/* responsive padding */}
      <Box bg="red.200" p={[2, 4, 6, 8]}>
        Padding
      </Box>
    </>
  );
};
