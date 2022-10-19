/* eslint-disable */
//@ts-nocheck
// This functions is taken from react native web

import createPrefixer from 'inline-style-prefixer/lib/createPrefixer';
import staticData from './staticData';

type StyleModifier = (style: Object) => Object;

const prefixAll: StyleModifier = createPrefixer(staticData);

export default prefixAll;
