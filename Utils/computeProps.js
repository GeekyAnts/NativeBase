var React = require('react-native');

var StyleSheetRegistry = require('react-native/Libraries/ReactNative/ReactNativePropRegistry');

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

        if(typeof incomingProps.style == 'number') {
            var incomingPropsStyle = StyleSheetRegistry.getStyleByID(incomingProps.style);
            computedProps.style = {};
        } else {
            var incomingPropsStyle = incomingProps.style;
        }

        _.merge(computedProps.style, defaultProps.style, incomingPropsStyle); 

    }

    // console.log("computedProps ", computedProps);
    
    return computedProps;


}