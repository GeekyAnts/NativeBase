var React = require('react-native');

var StyleSheetRegistry = require('react-native/Libraries/StyleSheet/StyleSheetRegistry');

module.exports = function(incomingProps, defaultProps) {

        // External props has a higher precedence
        var computedProps = {};
        _.merge(computedProps, defaultProps, incomingProps);

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
        
        return computedProps;


}