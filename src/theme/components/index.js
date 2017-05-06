import { Platform } from 'react-native';
import _ from 'lodash';
import headerTheme from './Header';
import containerTheme from './Container'
import contentTheme from './Content';
import buttonTheme from './Button';
import titleTheme from './Title';
import inputGroupTheme from './InputGroup';
import badgeTheme from './Badge';
import checkBoxTheme from './CheckBox';
import cardTheme from './Card';
import radioTheme from './Radio';
import h3Theme from './H3';
import h2Theme from './H2';
import h1Theme from './H1';
import footerTheme from './Footer';
import footerTabTheme from './FooterTab';
import fabTheme from './Fab';
import itemTheme from './Item';
import labelTheme from './Label';
import textAreaTheme from './Textarea';
import textTheme from './Text';
import toastTheme from './Toast';
import tabTheme from './Tab';
import tabBarTheme from './TabBar';
import tabContainerTheme from './TabContainer';
import viewTheme from './View';
import tabHeadingTheme from './TabHeading';
import iconTheme from './Icon';
import inputTheme from './Input';
import segmentTheme from './Segment';
import spinnerTheme from './Spinner';
import cardItemTheme from './CardItem';
import listItemTheme from './ListItem';
import formTheme from './Form';
import separatorTheme from './Separator';
import variable from './../variables/platform';

export default (variables = variable) => {
  const theme = {
    variables,
    'NativeBase.Left': {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-start',
    },
    'NativeBase.Right': {
      'NativeBase.Button': {
        alignSelf: null,
      },
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-end',
    },
    'NativeBase.Body': {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'center',
    },

    'NativeBase.Header': {
      ...headerTheme(variables),
    },

    'NativeBase.Button': {
      ...buttonTheme(variables),
    },

    'NativeBase.Title': {
      ...titleTheme(variables),
    },

    'NativeBase.InputGroup': {
      ...inputGroupTheme(variables),
    },

    'NativeBase.Input': {
      ...inputTheme(variables),
    },

    'NativeBase.Badge': {
      ...badgeTheme(variables),
    },

    'NativeBase.CheckBox': {
      ...checkBoxTheme(variables),
    },

    'NativeBase.Radio': {
      ...radioTheme(variables),
    },

    'NativeBase.Card': {
      ...cardTheme(),
    },

    'NativeBase.CardItem': {
      ...cardItemTheme(variables),
      '.cardBody': {
        padding: -5,
        'NativeBase.Text': {
          marginTop: 5,
        },
      },
      flexDirection: 'row',
      alignItems: 'center',
    },

    'NativeBase.CardItem1': {
      ...cardItemTheme(variables),
    },

    'NativeBase.Toast': {
      ...toastTheme(variables),
    },

    'NativeBase.H1': {
      ...h1Theme(variables),
    },
    'NativeBase.H2': {
      ...h2Theme(variables),
    },
    'NativeBase.H3': {
      ...h3Theme(variables),
    },
    'NativeBase.Form': {
      ...formTheme(variables),
    },

    'NativeBase.Container': {
      ...containerTheme(variables),
    },
    'NativeBase.Content': {
      ...contentTheme(variables),
    },


    'NativeBase.Footer': {
      ...footerTheme(variables),
    },

    'NativeBase.Tabs': {
      flex: 1,
    },

    'NativeBase.FooterTab': {
      ...footerTabTheme(variables),
    },

    'NativeBase.ListItem': {
      ...listItemTheme(variables),
      'NativeBase.CheckBox': {
        marginLeft: -10,
        marginRight: 10,
      },
      'NativeBase.Text': {
        '.note': {
          color: variables.listNoteColor,
          fontWeight: '200',
        },
        alignSelf: 'center',
      },
    },

    'NativeBase.ListItem1': {
      ...listItemTheme(variables),
    },

    'NativeBase.Icon': {
      ...iconTheme(variables),
    },
    'NativeBase.IconNB': {
      ...iconTheme(variables),
    },
    'NativeBase.Text': {
      ...textTheme(variables),
    },
    'NativeBase.Spinner': {
      ...spinnerTheme(variables),
    },

    'NativeBase.Fab': {
      ...fabTheme(variables),
    },

    'NativeBase.Item': {
      ...itemTheme(variables),
    },

    'NativeBase.Label': {
      ...labelTheme(variables),
    },

    'NativeBase.Textarea': {
      ...textAreaTheme(variables),
    },

    'NativeBase.PickerNB': {
      'NativeBase.Button': {
        'NativeBase.Text': {
        },
      },
    },

    'NativeBase.Tab': {
     ...tabTheme(variables),
    },

    'NativeBase.Segment': {
     ...segmentTheme(variables),
    },

    'NativeBase.STabs': {
      flex: 1,
    },

    'NativeBase.TabBar': {
      ...tabBarTheme(variables),
    },
    'NativeBase.ViewNB': {
      ...viewTheme(variables),
    },
    'NativeBase.TabHeading': {
      ...tabHeadingTheme(variables),
    },
    'NativeBase.TabContainer': {
      ...tabContainerTheme(variables),
    },
    'NativeBase.Switch': {
      marginVertical: -5,
    },
    'NativeBase.Separator': {
      ...separatorTheme(variables),
    },
    'NativeBase.Tabs': {
    },
    'NativeBase.Thumbnail': {
      '.square': {
        borderRadius: 0,
      },
      '.small': {
        width: 36,
        height: 36,
        borderRadius: 18,
      },
      '.large': {
        width: 80,
        height: 80,
        borderRadius: 40,
      },
      width: 56,
      height: 56,
      borderRadius: 28,
    },

  };

  const cssifyTheme = (grandparent, parent, parentKey) => {
    _.forEach(parent, (style, styleName) => {
      // console.log('styleName', styleName);
      // console.log('parentKey', parentKey);
      if (styleName.indexOf('.') === 0 && parentKey && parentKey.indexOf('.') === 0) {
        if (grandparent) {
          if (!grandparent[styleName]) {
            grandparent[styleName] = {};
          } else {
            grandparent[styleName][parentKey] = style;
          }
        }
      }
      if (style && typeof style === 'object') {
        cssifyTheme(parent, style, styleName);
      }
    });
  };

  cssifyTheme(null, theme, null);

  return theme;
};
