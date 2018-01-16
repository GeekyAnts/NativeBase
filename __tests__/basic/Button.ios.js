import React from "react";
import { TouchableNativeFeedback } from "react-native";
import renderer from "react-test-renderer";
import { Button } from "../../src/basic/Button";

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "ios";
  return Platform;
});

it("renders regular button", () => {
  const tree = renderer.create(<Button>Test</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
