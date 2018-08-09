import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Content } from "./../../src/basic/Content";
import { Thumbnail } from "./../../src/basic/Thumbnail";

// Note: test renderer must be required after react-native.
const cover = require("../assets/drawer-cover.png");

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "android";
  return Platform;
});

it("renders default shape thumbnail", () => {
  const tree = renderer
    .create(
      <Content>
        <Thumbnail small source={cover} />
        <Thumbnail source={cover} />
        <Thumbnail large source={cover} />
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders square shape thumbnail", () => {
  const tree = renderer
    .create(
      <Content>
        <Thumbnail square small source={cover} />
        <Thumbnail square source={cover} />
        <Thumbnail square large source={cover} />
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
