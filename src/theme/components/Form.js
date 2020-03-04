// @flow

export default () => {
  const theme = {
    'NativeBase.Item': {
      '.fixedLabel': {
        'NativeBase.Label': {
          paddingLeft: null
        },
        marginLeft: 15
      },
      '.inlineLabel': {
        'NativeBase.Label': {
          paddingLeft: null
        },
        marginLeft: 15
      },
      '.placeholderLabel': {
      },
      '.stackedLabel': {
        'NativeBase.Label': {
          top: 5,
          paddingLeft: null
        },
        'NativeBase.Icon': {
          marginTop: 36
        },
        marginLeft: 15
      },
      '.floatingLabel': {
        'NativeBase.Label': {
          left: 0,
          top: 6
        },
        'NativeBase.Icon': {
          top: 6
        },
        marginTop: 15,
        marginLeft: 15
      },
      '.regular': {
        'NativeBase.Label': {
          left: 0
        },
        marginLeft: 0
      },
      '.rounded': {
        'NativeBase.Label': {
          left: 0
        },
        marginLeft: 0
      },
      '.underline': {
        'NativeBase.Label': {
          left: 0,
          top: 0,
          position: 'relative'
        },
        marginLeft: 15
      },
      '.last': {
        marginLeft: 0,
        paddingLeft: 15
      },
      'NativeBase.Label': {
        paddingRight: 5
      },
      marginLeft: 15
    }
  };

  return theme;
};
