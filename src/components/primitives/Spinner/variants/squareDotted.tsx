import React from 'react';
import { Icon } from '../../../primitives/Icon';
import { Circle, G } from 'react-native-svg';

export function SquareDotted(props: any) {
  return (
    <Icon color={props.color} viewBox="0 0 50 50" size={props.size}>
      <G id="Group_264" data-name="Group 264" transform="translate(-172 -330)">
        <Circle
          id="Ellipse_33"
          data-name="Ellipse 33"
          cx="9"
          cy="9"
          r="9"
          transform="translate(172 330)"
          fill={props.color}
        />
        <Circle
          id="Ellipse_36"
          data-name="Ellipse 36"
          cx="9"
          cy="9"
          r="9"
          transform="translate(204 330)"
          fill={props.color}
        />
        <Circle
          id="Ellipse_35"
          data-name="Ellipse 35"
          cx="9"
          cy="9"
          r="9"
          transform="translate(172 362)"
          fill={props.color}
        />
        <Circle
          id="Ellipse_37"
          data-name="Ellipse 37"
          cx="9"
          cy="9"
          r="9"
          transform="translate(204 362)"
          fill={props.color}
        />
      </G>
    </Icon>
  );
}
