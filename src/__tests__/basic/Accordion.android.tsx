import 'react-native';
import React from 'react';
import renderer, { create } from 'react-test-renderer';

import { Container } from '../../basic/Container';
import { Header } from '../../basic/Header';
import { Content } from '../../basic/Content';
import { Accordion } from '../../basic/Accordion';
const dataArray = [
  { title: 'First Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' },
];

it('renders Regular Accordion', () => {
  const tree = create(
    <Container>
      <Header />
      <Content padder>
        <Accordion dataArray={dataArray} expanded />
      </Content>
    </Container>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Icon and Expanded Icon Accordion', () => {
  const tree = create(
    <Container>
      <Header />
      <Content padder>
        <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
      </Content>
    </Container>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Icon and Expanded Icon Style Accordion', () => {
  const tree = create(
    <Container>
      <Header />
      <Content padder>
        <Accordion
          dataArray={dataArray}
          icon="add"
          expandedIcon="remove"
          iconStyle={{ color: 'green' }}
          expandedIconStyle={{ color: 'red' }}
        />
      </Content>
    </Container>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Header and Content Style Accordion', () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: '#b7daf8' }}
            contentStyle={{ backgroundColor: '#ddecf8' }}
          />
        </Content>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
