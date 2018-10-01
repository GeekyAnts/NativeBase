// @flow

import _ from "lodash";
import bodyTheme from "./Body";
import leftTheme from "./Left";
import rightTheme from "./Right";
import headerTheme from "./Header";
import switchTheme from "./Switch";
import thumbnailTheme from "./Thumbnail";
import containerTheme from "./Container";
import contentTheme from "./Content";
import buttonTheme from "./Button";
import titleTheme from "./Title";
import subtitleTheme from "./Subtitle";
import inputGroupTheme from "./InputGroup";
import badgeTheme from "./Badge";
import checkBoxTheme from "./CheckBox";
import cardTheme from "./Card";
import radioTheme from "./Radio";
import h3Theme from "./H3";
import h2Theme from "./H2";
import h1Theme from "./H1";
import footerTheme from "./Footer";
import footerTabTheme from "./FooterTab";
import fabTheme from "./Fab";
import itemTheme from "./Item";
import labelTheme from "./Label";
import textAreaTheme from "./Textarea";
import textTheme from "./Text";
import toastTheme from "./Toast";
import tabTheme from "./Tab";
import tabBarTheme from "./TabBar";
import tabContainerTheme from "./TabContainer";
import viewTheme from "./View";
import tabHeadingTheme from "./TabHeading";
import iconTheme from "./Icon";
import inputTheme from "./Input";
import swipeRowTheme from "./SwipeRow";
import segmentTheme from "./Segment";
import spinnerTheme from "./Spinner";
import cardItemTheme from "./CardItem";
import listItemTheme from "./ListItem";
import formTheme from "./Form";
import separatorTheme from "./Separator";
import pickerTheme from "./Picker"
import variable from "./../variables/platform";

export default (variables /*: * */ = variable) => {
  const theme = {
    variables,
    "NativeBase.Left": {
      ...leftTheme(variables)
    },
    "NativeBase.Right": {
      ...rightTheme(variables)
    },
    "NativeBase.Body": {
      ...bodyTheme(variables)
    },

    "NativeBase.Header": {
      ...headerTheme(variables)
    },

    "NativeBase.Button": {
      ...buttonTheme(variables)
    },

    "NativeBase.Title": {
      ...titleTheme(variables)
    },
    "NativeBase.Subtitle": {
      ...subtitleTheme(variables)
    },

    "NativeBase.InputGroup": {
      ...inputGroupTheme(variables)
    },

    "NativeBase.Input": {
      ...inputTheme(variables)
    },

    "NativeBase.Badge": {
      ...badgeTheme(variables)
    },

    "NativeBase.CheckBox": {
      ...checkBoxTheme(variables)
    },

    "NativeBase.Radio": {
      ...radioTheme(variables)
    },

    "NativeBase.Card": {
      ...cardTheme()
    },

    "NativeBase.CardItem": {
      ...cardItemTheme(variables)
    },

    "NativeBase.Toast": {
      ...toastTheme(variables)
    },

    "NativeBase.H1": {
      ...h1Theme(variables)
    },
    "NativeBase.H2": {
      ...h2Theme(variables)
    },
    "NativeBase.H3": {
      ...h3Theme(variables)
    },
    "NativeBase.Form": {
      ...formTheme(variables)
    },

    "NativeBase.Container": {
      ...containerTheme(variables)
    },
    "NativeBase.Content": {
      ...contentTheme(variables)
    },

    "NativeBase.Footer": {
      ...footerTheme(variables)
    },

    "NativeBase.Tabs": {
      flex: 1
    },

    "NativeBase.FooterTab": {
      ...footerTabTheme(variables)
    },

    "NativeBase.ListItem": {
      ...listItemTheme(variables)
    },

    "NativeBase.ListItem1": {
      ...listItemTheme(variables)
    },

    "NativeBase.Icon": {
      ...iconTheme(variables)
    },
    "NativeBase.IconNB": {
      ...iconTheme(variables)
    },
    "NativeBase.Text": {
      ...textTheme(variables)
    },
    "NativeBase.Spinner": {
      ...spinnerTheme(variables)
    },

    "NativeBase.Fab": {
      ...fabTheme(variables)
    },

    "NativeBase.Item": {
      ...itemTheme(variables)
    },

    "NativeBase.Label": {
      ...labelTheme(variables)
    },

    "NativeBase.Textarea": {
      ...textAreaTheme(variables)
    },

    "NativeBase.PickerNB": {
      ...pickerTheme(variables),
      "NativeBase.Button": {
        "NativeBase.Text": {}
      }
    },

    "NativeBase.Tab": {
      ...tabTheme(variables)
    },

    "NativeBase.Segment": {
      ...segmentTheme(variables)
    },

    "NativeBase.TabBar": {
      ...tabBarTheme(variables)
    },
    "NativeBase.ViewNB": {
      ...viewTheme(variables)
    },
    "NativeBase.TabHeading": {
      ...tabHeadingTheme(variables)
    },
    "NativeBase.TabContainer": {
      ...tabContainerTheme(variables)
    },
    "NativeBase.Switch": {
      ...switchTheme(variables)
    },
    "NativeBase.Separator": {
      ...separatorTheme(variables)
    },
    "NativeBase.SwipeRow": {
      ...swipeRowTheme(variables)
    },
    "NativeBase.Thumbnail": {
      ...thumbnailTheme(variables)
    }
  };

  const cssifyTheme = (grandparent, parent, parentKey) => {
    _.forEach(parent, (style, styleName) => {
      // console.log('styleName', styleName);
      // console.log('parentKey', parentKey);
      if (
        styleName.indexOf(".") === 0 &&
        parentKey &&
        parentKey.indexOf(".") === 0
      ) {
        if (grandparent) {
          if (!grandparent[styleName]) {
            grandparent[styleName] = {};
          } else {
            grandparent[styleName][parentKey] = style;
          }
        }
      }
      if (style && typeof style === "object" && styleName !== "fontVariant" && styleName !== "transform") {
        cssifyTheme(parent, style, styleName);
      }
    });
  };

  cssifyTheme(null, theme, null);

  return theme;
};
