import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from './../../src/backward/Widgets/Header';
import { Button } from './../../src/backward/Widgets/Button';
import { Icon } from './../../src/backward/Widgets/Icon';
import { Title } from './../../src/backward/Widgets/Title';
import Subtitle from './../../src/backward/Widgets/Subtitle';

// Note: test renderer must be required after react-native.

jest.mock('Platform', () => {
    const Platform = require.requireActual('Platform');
    Platform.OS = 'android';
    return Platform;
});
jest.mock('ScrollView', () => 'ScrollView');

it('renders correctly', () => {
    const tree = renderer.create(
        <Header />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with buttons', () => {
    const tree = renderer.create(
        <Header>
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>

            <Title>Header</Title>

            <Button transparent>
                <Icon name='ios-menu' />
            </Button>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with a null button', () => {
    const tree = renderer.create(
        <Header>
            {null}
            <Title>Header</Title>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with buttons and subtitle', () => {
    const tree = renderer.create(
        <Header>
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>

            <Title>Header</Title>
            <Subtitle>Subtitle</Subtitle>

            <Button transparent>
                <Icon name='ios-menu' />
            </Button>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with just one button', () => {
    const tree = renderer.create(
        <Header>
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>

            <Title>Header</Title>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with just one button and subtitle', () => {
    const tree = renderer.create(
        <Header>
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>

            <Title>Header</Title>
            <Subtitle>Subtitle</Subtitle>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with just one button and iconRight', () => {
    const tree = renderer.create(
        <Header iconRight>
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>

            <Title>Header</Title>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with just one button, iconRight and a subtitle', () => {
    const tree = renderer.create(
        <Header iconRight>
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>

            <Title>Header</Title>
            <Subtitle>SubTitle</Subtitle>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

// jest-react-native doesn't work yet with that and mocking didn't work either.
/*
it('renders header with searchbar', () => {
    const tree = renderer.create(
        <Header searchBar rounded>
            <InputGroup>
                <Icon name='ios-search' />
                <Input placeholder='Search' />
                <Icon name='ios-people' />
            </InputGroup>
            <Button transparent>
                Search
            </Button>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
*/