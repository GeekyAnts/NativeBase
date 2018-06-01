import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Container } from "./../../src/basic/Container";
import { Spinner } from "./../../src/basic/Spinner";

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "android";
  return Platform;
});

it("renders Spinner", () => {
  const tree = renderer
    .create(
      <Container>
        <Spinner />
        <Spinner color="red" />
        <Spinner color="green" />
        <Spinner color="blue" />
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
