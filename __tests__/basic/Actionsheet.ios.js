import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Button } from "./../../src/basic/Button";
import { ActionSheet } from "./../../src/basic/Actionsheet";
import { Text } from "./../../src/basic/Text";

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "ios";
  return Platform;
});

it("renders ActionSheet", () => {
  const tree = renderer
    .create(
      <Button
        onPress={() =>
          ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              title: "Select an option"
            },
            buttonIndex => {
              this.setState({ clicked: BUTTONS[buttonIndex] });
            }
          )
        }
      >
        <Text>Actionsheet</Text>
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
