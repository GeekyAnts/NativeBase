import React from "react";
import { Box, StatusBar, Stack, ScrollView } from "native-base";
export default function GuestLayout(props) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{
          bg: "primary.900",
        }}
        _dark={{
          bg: "backgroundDark.900",
        }}
      />
      <ScrollView
        flex="1"
        p={{
          md: 8,
        }}
        _dark={{
          bg: "backgroundDark.900",
        }}
        _light={{
          bg: {
            base: "primary.900",
            md: "primary.950",
          },
        }}
        contentContainerStyle={{
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
        }}
        bounces={false}
      >
        <Stack
          w="100%"
          maxW={{
            md: "1016",
          }}
          flex={{
            base: 1,
            md: undefined,
          }}
          direction={{
            base: "column",
            md: "row",
          }}
          borderRadius={{
            base: 0,
            md: "xl",
          }}
          overflow="hidden"
        >
          {props.children}
        </Stack>
      </ScrollView>
    </>
  );
}
