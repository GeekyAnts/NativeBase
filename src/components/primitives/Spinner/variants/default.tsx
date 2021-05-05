import React from 'react';
import { Icon } from '../../../primitives/Icon';
import { Circle, G } from 'react-native-svg';

export function Default(props: any) {
  return (
    <Icon color={props.color} viewBox="0 0 64 64" size={props.size}>
      <G id="Group_182" data-name="Group 182" transform="translate(-258 -488)">
        <G
          id="Ellipse_8"
          data-name="Ellipse 8"
          transform="translate(258 488)"
          fill="none"
          stroke="#e8edfb"
          strokeWidth="6"
        >
          <Circle cx="32" cy="32" r="32" stroke="none" />
          <Circle cx="32" cy="32" r="29" fill="none" />
        </G>
        <G
          id="Ellipse_10"
          data-name="Ellipse 10"
          transform="translate(258 488)"
          fill="none"
          stroke={props.color}
          strokeLinecap="square"
          strokeWidth="6"
          strokeDasharray="90 10000"
        >
          <Circle cx="32" cy="32" r="32" stroke="none" />
          <Circle cx="32" cy="32" r="29" fill="none" />
        </G>
      </G>
    </Icon>
  );
}
