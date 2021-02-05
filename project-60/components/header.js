import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
      <View style={headStyle.headBg}>
      <Text style={headStyle.headerStyle}>ATTENDENCE APP</Text>
      </View>
    )
  }
}

var headStyle = StyleSheet.create({
  headerStyle:{
    fontSize:40,
    color:'white',
    fontWeight:10,
    alignSelf:'center',

  },

  headBg:{
    height : 55,
    backgroundColor:'#3489eb'
  }
})