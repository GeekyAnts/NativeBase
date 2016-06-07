'use_strict';

import _ from 'lodash';
import ReactNativePropRegistry from 'react/lib/ReactNativePropRegistry';

// For compatibility with RN 0.25
// import ReactNativePropRegistry from "react-native/Libraries/ReactNative/ReactNativePropRegistry";

module.exports = function(incomingProps, defaultProps) {


    // External props has a higher precedence
    var computedProps = {};

    incomingProps = _.clone(incomingProps);
    delete incomingProps.children;

    // console.log(defaultProps, incomingProps);

    if(incomingProps)
        _.merge(computedProps, defaultProps, incomingProps);
    else
        computedProps = defaultProps;

    // Pass the merged Style Object instead
    if(incomingProps.style) {

        var incomingPropsStyle;

        if(typeof incomingProps.style == 'number') {
            incomingPropsStyle = ReactNativePropRegistry.getByID(incomingProps.style);
            computedProps.style = {};
        } else {
            incomingPropsStyle = incomingProps.style;
        }

        _.merge(computedProps.style, defaultProps.style, incomingPropsStyle);

    }

    // console.log("computedProps ", computedProps);

    return computedProps;


}
