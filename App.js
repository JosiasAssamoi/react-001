import React,{useState} from 'react';
import {SafeAreaView,Image,View,Text,ScrollView,TextInput,Button}  from 'react-native';
import {styles} from "./assets/styles"
import MyCounterDiv from './components/MyCounterDiv';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyListText from './components/MyListText';

export default function App() {
  return (
         <SafeAreaView style={styles.container} >
           <MyListText></MyListText>
            <MyFooter></MyFooter>
         </SafeAreaView>
         
   
    
  );
}


