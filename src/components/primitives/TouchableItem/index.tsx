import React from 'react';
import { makeStyledComponent } from '../../../utils/styled';
import { TouchableHighlight } from 'react-native';

const TouchableItem = makeStyledComponent(TouchableHighlight);
export default React.memo(TouchableItem);
