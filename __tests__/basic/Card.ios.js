import { Image, Dimensions } from "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Container } from "./../../src/basic/Container";
import { Header } from "./../../src/basic/Header";
import { Content } from "./../../src/basic/Content";
import { Card } from "./../../src/basic/Card";
import { CardItem } from "./../../src/basic/CardItem";
import { Left } from "./../../src/basic/Left";
import { Body } from "./../../src/basic/Body";
import { Right } from "./../../src/basic/Right";
import { Button } from "./../../src/basic/Button";
import { Text } from "./../../src/basic/Text";
import { Icon } from "./../../src/basic/Icon";
import { Thumbnail } from "./../../src/basic/Thumbnail";

const deviceWidth = Dimensions.get("window").width;
const logo = require("../assets/logo.png");
const cardImage = require("../assets/drawer-cover.png");

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "ios";
  return Platform;
});

it("renders basic Card", () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>This is just a basic card with some text to boot.</Text>
                <Text>Like it? Keep Scrolling...</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Card Header and Footer", () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  NativeBase builds a layer on top of React Native that provides
                  you with basic set of components for mobile application
                  development.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Get on the mobile fast track with NativeBase, the
                  fastest-growing platform and tool set for iOS and Android
                  development.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders bordered CardItem", () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase builds a layer on top of React Native that provides
                  you with basic set of components for mobile application
                  development.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Get on the mobile fast track with NativeBase, the
                  fastest-growing platform and tool set for iOS and Android
                  development.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders transparent Card", () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                  This is just a transparent card with some text to boot.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders button CardItem", () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem
              header
              button
              onPress={() => alert("This is Card Header")}
            >
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>Click on any carditem</Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              button
              onPress={() => alert("This is Card Footer")}
            >
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Card List", () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Social Applications</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active
                  name="logo-googleplus"
                  style={{ color: "#DD5044" }}
                />
                <Text>Google Plus</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active
                  name="logo-facebook"
                  style={{ color: "#3B579D" }}
                />
                <Text>facebook</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="logo-twitter" style={{ color: "#55ACEE" }} />
                <Text>Twitter</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="logo-reddit" style={{ color: "#FF4500" }} />
                <Text>Reddit</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active
                  name="logo-linkedin"
                  style={{ color: "#007BB6" }}
                />
                <Text>LinkedIn</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="logo-youtube" style={{ color: "#D62727" }} />
                <Text>YouTube</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Card Image", () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={cardImage}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>4923 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>89 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Card Showcase", () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem bordered>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image
                  style={{
                    alignSelf: "center",
                    height: 150,
                    resizeMode: "cover",
                    width: deviceWidth / 1.18,
                    marginVertical: 5
                  }}
                  source={cardImage}
                />
                <Text>
                  NativeBase is a free and source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6. NativeBase
                  builds a layer on top of React Native that provides you with
                  basic set of components for mobile application development.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon name="logo-github" />
                  <Text>4,923 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
