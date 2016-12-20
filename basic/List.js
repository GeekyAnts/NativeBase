import React, { Component } from 'react';
import { ListView } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

const List = ListView;

const StyledList = connectStyle('NativeBase.List', {}, mapPropsToStyleNames)(List);

export {
  StyledList as List,
};
