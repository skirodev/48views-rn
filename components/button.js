import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import { flextCenter } from './values/style'

export default class Button extends Component {
  render(){
    const {width,height,backgroundColor,children,borderRadius} = this.props
    return(
      <View style = {{...flextCenter,backgroundColor,width,height,borderRadius}}>
        <Text style = {{color:'white',fontSize:20}}>{children}</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  button: {
      height: 42,
      borderRadius: 6,
      backgroundColor: "#1977f3",
      justifyContent: "center",
      marginVertical: 15,
    },
    buttonText: {
      color: "#b4cafb",
      textAlign: "center",
      fontSize: 16,
    },
});