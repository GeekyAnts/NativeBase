import React from 'react';
import { Icon } from '../../primitives';
import { Path, Circle, G, Ellipse } from 'react-native-svg';

export default function (props: any) {
  switch (props.type) {
    case 'dotted':
      return (
        <Icon color={props.color} viewBox="0 0 66.238 69">
          <Path
            id="Path_33"
            data-name="Path 33"
            d="M74.735,324.332a6.22,6.22,0,1,0,4.377,1.811A5.989,5.989,0,0,0,74.735,324.332Z"
            transform="translate(-59.556 -275.343)"
          />
          <Path
            id="Path_34"
            data-name="Path 34"
            d="M22.942,198.757a6.92,6.92,0,0,0-6.9-6.9,6.645,6.645,0,0,0-4.873,2.027,6.872,6.872,0,0,0,0,9.746,6.643,6.643,0,0,0,4.873,2.027,6.643,6.643,0,0,0,4.873-2.027A6.642,6.642,0,0,0,22.942,198.757Z"
            transform="translate(-9.142 -162.878)"
          />
          <Path
            id="Path_35"
            data-name="Path 35"
            d="M346.061,93.695a3.46,3.46,0,1,0-2.437-1.014A3.323,3.323,0,0,0,346.061,93.695Z"
            transform="translate(-292.242 -73.684)"
          />
          <Path
            id="Path_36"
            data-name="Path 36"
            d="M66.983,59.388a7.582,7.582,0,1,0,5.369,2.221A7.315,7.315,0,0,0,66.983,59.388Z"
            transform="translate(-51.803 -50.418)"
          />
          <Path
            id="Path_37"
            data-name="Path 37"
            d="M399.941,211.34a4.166,4.166,0,1,0,1.207,2.933A3.99,3.99,0,0,0,399.941,211.34Z"
            transform="translate(-334.91 -178.393)"
          />
          <Path
            id="Path_38"
            data-name="Path 38"
            d="M338.3,333.473a4.859,4.859,0,1,0,3.407,1.423A4.648,4.648,0,0,0,338.3,333.473Z"
            transform="translate(-284.485 -283.104)"
          />
          <Path
            id="Path_39"
            data-name="Path 39"
            d="M206.519,383.717a5.524,5.524,0,1,0,3.9,1.618A5.322,5.322,0,0,0,206.519,383.717Z"
            transform="translate(-172.019 -325.759)"
          />
          <Path
            id="Path_40"
            data-name="Path 40"
            d="M191.007,0a7.987,7.987,0,0,0-5.866,2.415,7.987,7.987,0,0,0-2.415,5.865,7.985,7.985,0,0,0,2.415,5.865,8.33,8.33,0,0,0,11.73,0,7.985,7.985,0,0,0,2.414-5.865,7.989,7.989,0,0,0-2.414-5.865A7.984,7.984,0,0,0,191.007,0Z"
            transform="translate(-156.508 0)"
          />
        </Icon>
      );
    case 'multiColorDotted':
      return (
        <Icon color={props.color} viewBox="0 0 74.072 74.072">
          <Circle
            id="Ellipse_24"
            data-name="Ellipse 24"
            cx="7.622"
            cy="7.622"
            r="7.622"
            transform="translate(7.037 48.382)"
            fillOpacity="0.7"
          />
          <Ellipse
            id="Ellipse_25"
            data-name="Ellipse 25"
            cx="6.628"
            cy="6.959"
            rx="6.628"
            ry="6.959"
            transform="translate(58.733 43.08)"
            fillOpacity="0.4"
          />
          <Circle
            id="Ellipse_26"
            data-name="Ellipse 26"
            cx="5.634"
            cy="5.634"
            r="5.634"
            transform="translate(53.431 11.267)"
            fillOpacity="0.2"
          />
          <Ellipse
            id="Ellipse_27"
            data-name="Ellipse 27"
            cx="8.383"
            cy="8.178"
            rx="8.383"
            ry="8.178"
            transform="translate(0 28.299)"
            fillOpacity="0.8"
          />
          <Ellipse
            id="Ellipse_28"
            data-name="Ellipse 28"
            cx="7.621"
            cy="7.426"
            rx="7.621"
            ry="7.426"
            transform="translate(24.843 59.221)"
            fillOpacity="0.6"
          />
          <Ellipse
            id="Ellipse_29"
            data-name="Ellipse 29"
            cx="7.24"
            cy="7.049"
            rx="7.24"
            ry="7.049"
            transform="translate(44.809 56.721)"
            fillOpacity="0.5"
          />
          <Ellipse
            id="Ellipse_30"
            data-name="Ellipse 30"
            cx="8.764"
            cy="8.554"
            rx="8.764"
            ry="8.554"
            transform="translate(8.688 8.554)"
            fillOpacity="0.9"
          />
          <Ellipse
            id="Ellipse_31"
            data-name="Ellipse 31"
            cx="6.478"
            cy="6.357"
            rx="6.478"
            ry="6.357"
            transform="translate(61.117 25.906)"
            fillOpacity="0.3"
          />
          <Ellipse
            id="Ellipse_32"
            data-name="Ellipse 32"
            cx="8.947"
            cy="9.279"
            rx="8.947"
            ry="9.279"
            transform="translate(30.234)"
            fillOpacity="1"
          />
        </Icon>
      );
    case 'stroked':
      return (
        <Icon color={props.color} viewBox="0 0 69.672 69.672">
          <G id="Group_252" data-name="Group 252" transform="translate(32.661)">
            <Path
              id="Path_17"
              data-name="Path 17"
              d="M242.194,8.958a2.175,2.175,0,0,1-2.175-2.175V2.175a2.175,2.175,0,1,1,4.349,0V6.783A2.175,2.175,0,0,1,242.194,8.958Z"
              transform="translate(-240.019 0)"
              fill={props.color}
            />
            <Path
              id="Path_18"
              data-name="Path 18"
              d="M242.194,455.127a2.175,2.175,0,0,1-2.175-2.175v-4.609a2.175,2.175,0,1,1,4.349,0v4.609A2.175,2.175,0,0,1,242.194,455.127Z"
              transform="translate(-240.019 -385.455)"
              fill={props.color}
            />
          </G>
          <G
            id="Group_253"
            data-name="Group 253"
            transform="translate(16.33 4.376)"
          >
            <Path
              id="Path_19"
              data-name="Path 19"
              d="M125.574,40.2a2.175,2.175,0,0,1-2.971-.8l-2.3-3.991a2.175,2.175,0,0,1,3.766-2.175l2.3,3.991a2.174,2.174,0,0,1-.8,2.971Z"
              transform="translate(-120.007 -32.155)"
              fill={props.color}
            />
            <Path
              id="Path_20"
              data-name="Path 20"
              d="M348.658,426.6a2.175,2.175,0,0,1-2.971-.8l-2.3-3.991a2.175,2.175,0,1,1,3.767-2.175l2.3,3.991A2.174,2.174,0,0,1,348.658,426.6Z"
              transform="translate(-312.735 -365.968)"
              fill={props.color}
            />
          </G>
          <G
            id="Group_254"
            data-name="Group 254"
            transform="translate(4.375 16.33)"
          >
            <Path
              id="Path_21"
              data-name="Path 21"
              d="M40.2,125.574a2.175,2.175,0,0,1-2.971.8l-3.991-2.3a2.175,2.175,0,0,1,2.175-3.767l3.991,2.3A2.175,2.175,0,0,1,40.2,125.574Z"
              transform="translate(-32.154 -120.007)"
              fill={props.color}
            />
            <Path
              id="Path_22"
              data-name="Path 22"
              d="M426.6,348.658a2.175,2.175,0,0,1-2.971.8l-3.991-2.3a2.175,2.175,0,1,1,2.175-3.766l3.991,2.3A2.174,2.174,0,0,1,426.6,348.658Z"
              transform="translate(-365.968 -312.735)"
              fill={props.color}
            />
          </G>
          <G
            id="Group_255"
            data-name="Group 255"
            transform="translate(0 32.661)"
          >
            <Path
              id="Path_23"
              data-name="Path 23"
              d="M8.958,242.194a2.175,2.175,0,0,1-2.175,2.175H2.175a2.175,2.175,0,1,1,0-4.349H6.783A2.175,2.175,0,0,1,8.958,242.194Z"
              transform="translate(0 -240.019)"
              fill={props.color}
            />
            <Path
              id="Path_24"
              data-name="Path 24"
              d="M455.127,242.194a2.175,2.175,0,0,1-2.175,2.175h-4.609a2.175,2.175,0,1,1,0-4.349h4.609A2.175,2.175,0,0,1,455.127,242.194Z"
              transform="translate(-385.455 -240.019)"
              fill={props.color}
            />
          </G>
          <G
            id="Group_256"
            data-name="Group 256"
            transform="translate(4.376 16.33)"
          >
            <Path
              id="Path_25"
              data-name="Path 25"
              d="M40.2,344.179a2.175,2.175,0,0,1-.8,2.971l-3.991,2.3a2.175,2.175,0,0,1-2.175-3.766l3.991-2.3A2.175,2.175,0,0,1,40.2,344.179Z"
              transform="translate(-32.155 -312.735)"
              fill={props.color}
            />
            <Path
              id="Path_26"
              data-name="Path 26"
              d="M426.6,121.1a2.175,2.175,0,0,1-.8,2.971l-3.991,2.3a2.175,2.175,0,0,1-2.175-3.766l3.991-2.3A2.174,2.174,0,0,1,426.6,121.1Z"
              transform="translate(-365.97 -120.007)"
              fill={props.color}
            />
          </G>
          <G
            id="Group_257"
            data-name="Group 257"
            transform="translate(16.33 4.375)"
          >
            <Path
              id="Path_27"
              data-name="Path 27"
              d="M125.574,418.839a2.175,2.175,0,0,1,.8,2.971l-2.3,3.991a2.175,2.175,0,0,1-3.767-2.175l2.3-3.991A2.175,2.175,0,0,1,125.574,418.839Z"
              transform="translate(-120.007 -365.968)"
              fill={props.color}
            />
            <Path
              id="Path_28"
              data-name="Path 28"
              d="M348.658,32.445a2.175,2.175,0,0,1,.8,2.971l-2.3,3.991a2.175,2.175,0,1,1-3.766-2.175l2.3-3.991A2.174,2.174,0,0,1,348.658,32.445Z"
              transform="translate(-312.735 -32.154)"
              fill={props.color}
            />
          </G>
        </Icon>
      );
    case 'squareDotted':
      return (
        <Icon color={props.color} viewBox="0 0 50 50">
          <G
            id="Group_264"
            data-name="Group 264"
            transform="translate(-172 -330)"
          >
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
    default:
      return (
        <Icon color={props.color} viewBox="0 0 64 64">
          <G
            id="Group_182"
            data-name="Group 182"
            transform="translate(-258 -488)"
          >
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
}
