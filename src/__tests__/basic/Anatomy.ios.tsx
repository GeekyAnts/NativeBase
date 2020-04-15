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
import { Right } from '../../basic/Right';
import { Content } from '../../basic/Content';
import { Text } from '../../basic/Text';
import { Footer } from '../../basic/Footer';
import { FooterTab } from '../../basic/FooterTab';

it('renders anatomy', () => {
  const tree = renderer
    .create(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Content goes here</Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
