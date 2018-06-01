import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Container } from "./../../src/basic/Container";
import { Header } from "./../../src/basic/Header";
import { Button } from "./../../src/basic/Button";
import { Icon } from "./../../src/basic/Icon";
import { Content } from "./../../src/basic/Content";
import { Text } from "./../../src/basic/Text";
import { Footer } from "./../../src/basic/Footer";
import { FooterTab } from "./../../src/basic/FooterTab";
import { Badge } from "./../../src/basic/Badge";

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "ios";
  return Platform;
});

it("renders basic Footer", () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button active={true}>
              <Text>Apps</Text>
            </Button>
            <Button active={false}>
              <Text>Camera</Text>
            </Button>
            <Button active={false}>
              <Text>Navigate</Text>
            </Button>
            <Button active={false}>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Footer with Icons", () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button active={true}>
              <Icon active={true} name="apps" />
            </Button>
            <Button active={false}>
              <Icon active={false} name="camera" />
            </Button>
            <Button active={false}>
              <Icon active={false} name="compass" />
            </Button>
            <Button active={false}>
              <Icon active={false} name="contact" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Footer with Icon and Text", () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button active={true}>
              <Icon active={true} name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button active={false}>
              <Icon active={false} name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active={false}>
              <Icon active={false} name="compass" />
              <Text>Compass</Text>
            </Button>
            <Button active={false}>
              <Icon active={false} name="contact" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Footer with Badge", () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button active={true} vertical badge>
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon active={true} name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button active={false}>
              <Icon active={false} name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active={false} vertical badge>
              <Badge style={{ backgroundColor: "green" }}>
                <Text>51</Text>
              </Badge>
              <Icon active={false} name="compass" />
              <Text>Compass</Text>
            </Button>
            <Button active={false}>
              <Icon active={false} name="contact" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
