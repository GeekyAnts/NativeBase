import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Content } from "./../../src/basic/Content";
import { H1 } from "./../../src/basic/H1";
import { H2 } from "./../../src/basic/H2";
import { H3 } from "./../../src/basic/H3";
import { Text } from "./../../src/basic/Text";

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "ios";
  return Platform;
});

it("renders Typography", () => {
  const tree = renderer
    .create(
      <Content>
        <H1>Header One</H1>
        <H2>Header Two</H2>
        <H3>Header Three</H3>
        <Text>Default</Text>
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
