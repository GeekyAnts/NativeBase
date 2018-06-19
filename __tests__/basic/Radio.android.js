import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Content } from "./../../src/basic/Content";
import { ListItem } from "./../../src/basic/ListItem";
import { Left } from "./../../src/basic/Left";
import { Right } from "./../../src/basic/Right";
import { Text } from "./../../src/basic/Text";
import { Radio } from "./../../src/basic/Radio";

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "android";
  return Platform;
});

it("renders default radio", () => {
  const tree = renderer
    .create(
      <Content>
        <ListItem selected={true}>
          <Left>
            <Text>Lunch Break</Text>
          </Left>
          <Right>
            <Radio selected={true} />
          </Right>
        </ListItem>
        <ListItem selected={false}>
          <Left>
            <Text>Daily Stand Up</Text>
          </Left>
          <Right>
            <Radio selected={false} />
          </Right>
        </ListItem>
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders custom radio", () => {
  const tree = renderer
    .create(
      <Content>
        <ListItem selected={true}>
          <Left>
            <Text>Lunch Break</Text>
          </Left>
          <Right>
            <Radio
              selected={true}
              color={"#f0ad4e"}
              selectedColor={"#5cb85c"}
            />
          </Right>
        </ListItem>
        <ListItem selected={false}>
          <Left>
            <Text>Daily Stand Up</Text>
          </Left>
          <Right>
            <Radio
              selected={false}
              color={"#f0ad4e"}
              selectedColor={"#5cb85c"}
            />
          </Right>
        </ListItem>
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
