/* @flow */
'use strict';

import React, {Text } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';


export default class H3NB extends NativeBaseComponent {
  static childContextTypes = {
      theme: React.PropTypes.object
  }
  
  getChildContext() {
      return {theme: this.props.theme ? this.props.theme : this.getTheme()};
  }
    
  prepareRootProps() {

      var type = { 
        color: this.getTheme().textColor,
        fontSize: this.getTheme().fontSizeH3
      }
    
      var defaultProps = {
          style: type
      }   
    
      return computeProps(this.props, defaultProps);

  }
    render() {
        return(
            <Text {...this.prepareRootProps()}>{this.props.children}</Text>
        );
    }    

}
