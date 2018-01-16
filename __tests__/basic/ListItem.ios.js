import React from "react";
import "react-native";
import renderer from "react-test-renderer";
import { ListItem } from "../../src/basic/ListItem";

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "ios";
  return Platform;
});

it("renders regular listItem", () => {
  const tree = renderer.create(<ListItem>This is ListItem</ListItem>).toJSON();
  expect(tree).toMatchSnapshot();
});
