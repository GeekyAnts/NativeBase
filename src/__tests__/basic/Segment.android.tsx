import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Container } from '../../basic/Container';
import { Header } from '../../basic/Header';
import { Left } from '../../basic/Left';
import { Button } from '../../basic/Button';
import { Icon } from '../../basic/Icon';
import { Body } from '../../basic/Body';
import { Right } from '../../basic/Right';
import { Text } from '../../basic/Text';
import { Segment } from '../../basic/Segment';

it('renders Segments inside Header', () => {
  const tree = renderer
    .create(
      <Container>
        <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Segment>
              <Button active={true} first>
                <Text>Puppies</Text>
              </Button>
              <Button last active={false}>
                <Text>Cubs</Text>
              </Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Segments outside Header', () => {
  const tree = renderer
    .create(
      <Container>
        <Header hasSegment />
        <Segment>
          <Button first active={true}>
            <Text>Puppies</Text>
          </Button>
          <Button active={false}>
            <Text>Kittens</Text>
          </Button>
          <Button last active={false}>
            <Text>Cubs</Text>
          </Button>
        </Segment>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
