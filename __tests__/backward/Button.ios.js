import 'react-native';
import renderer from 'react-test-renderer';

import React from 'react';
import { Button } from './../../src/backward/Widgets/Button';
// import Icon from '../../../Components/Widgets/Icon';

// Note: test renderer must be required after react-native.

jest.mock('Platform', () => {
    const Platform = require.requireActual('Platform');
    Platform.OS = 'ios';
    return Platform;
});


it('renders regular button', () => {
   const tree = renderer.create(
       <Button>
           Test
       </Button>
   ).toJSON();
    expect(tree).toMatchSnapshot();
});