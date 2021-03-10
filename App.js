import React,{useState} from 'react';
import { StyleSheet,View} from 'react-native';
import Header from './components/Header.js'
import Home from './components/Home.js'
export default function App(){
  return(
    <View style={{backgroundColor:'#29292b'}} style={StyleSheet.absoluteFill}>
      <Header></Header>
      <Home></Home>
    </View>
  );
}
