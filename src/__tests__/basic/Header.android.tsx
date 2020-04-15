import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Container } from '../../basic/Container';
import { Header } from '../../basic/Header';
import { Left } from '../../basic/Left';
import { Button } from '../../basic/Button';
import { Icon } from '../../basic/Icon';
import { Body } from '../../basic/Body';
import { Title } from '../../basic/Title';
import { Subtitle } from '../../basic/Subtitle';
import { Right } from '../../basic/Right';
import { Content } from '../../basic/Content';
import { Text } from '../../basic/Text';

it('renders Header with only Title', () => {
  const tree = renderer
    .create(
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Header with Icon Buttons', () => {
  const tree = renderer
    .create(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Header with Text Buttons', () => {
  const tree = renderer
    .create(
      <Container>
        <Header>
          <Left>
            <Button hasText transparent>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Header with Icon Button & Text Button', () => {
  const tree = renderer
    .create(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Header with Icon & Text Button', () => {
  const tree = renderer
    .create(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Header with multiple Icon Button', () => {
  const tree = renderer
    .create(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="heart" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Header with Title and Subtitle', () => {
  const tree = renderer
    .create(
      <Container>
        <Header hasSubtitle>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Title</Title>
            <Subtitle>Subtitle</Subtitle>
          </Body>
          <Right />
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Header with Custom background color', () => {
  const tree = renderer
    .create(
      <Container>
        <Header style={{ backgroundColor: '#dc4239' }} androidStatusBarColor="#dc2015" iosBarStyle="light-content">
          <Left>
            <Button transparent>
              <Icon name="arrow-back" style={{ color: '#FFF' }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#FFF' }}>Custom Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Header span', () => {
  const tree = renderer
    .create(
      <Container>
        <Header span>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header Span</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Header noShadow', () => {
  const tree = renderer
    .create(
      <Container>
        <Header noShadow>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header No Shadow</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Header noLeft', () => {
  const tree = renderer
    .create(
      <Container>
        <Header noLeft>
          <Left>
            <Button hasText transparent>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
