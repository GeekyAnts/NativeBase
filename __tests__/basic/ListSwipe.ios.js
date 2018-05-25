import { View } from "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Content } from "./../../src/basic/Content";
import { SwipeRow } from "./../../src/basic/SwipeRow";
import { Button } from "./../../src/basic/Button";
import { Icon } from "./../../src/basic/Icon";
import { Text } from "./../../src/basic/Text";

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "ios";
  return Platform;
});

it("renders regular Single SwipeRow", () => {
  const tree = renderer
    .create(
      <Content scrollEnabled={false}>
        <SwipeRow
          leftOpenValue={75}
          rightOpenValue={-75}
          left={
            <Button success onPress={() => alert("Add")}>
              <Icon active name="add" style={{ color: "#FFF" }} />
            </Button>
          }
          right={
            <Button danger onPress={() => alert("Trash")}>
              <Icon active name="trash" />
            </Button>
          }
          body={
            <View style={{ paddingLeft: 20 }}>
              <Text>Swipe me to left and right</Text>
            </View>
          }
        />
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders regular Single SwipeRow Custom Style", () => {
  const tree = renderer
    .create(
      <Content scrollEnabled={false}>
        <SwipeRow
          style={{ backgroundColor: "#9370DB" }}
          leftOpenValue={75}
          rightOpenValue={-75}
          left={
            <Button success onPress={() => alert("Add")}>
              <Icon active name="add" style={{ color: "#FFF" }} />
            </Button>
          }
          right={
            <Button danger onPress={() => alert("Trash")}>
              <Icon active name="trash" />
            </Button>
          }
          body={
            <View style={{ paddingLeft: 20 }}>
              <Text style={{ color: "#FFF" }}>Swipe me to left and right</Text>
            </View>
          }
        />
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
