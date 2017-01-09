import 'react-native';
import React from 'react';
import Badge from '../../../Components/Widgets/Badge';
// import Icon from '../../../Components/Widgets/Icon';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('Platform', () => {
    const Platform = require.requireActual('Platform');
    Platform.OS = 'android';
    return Platform;
});


it('renders regular badge', () => {
   const tree = renderer.create(
       <Badge>
           2
       </Badge>
   ).toJSON();
    expect(tree).toMatchSnapshot();
});