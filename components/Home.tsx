import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Pressable, Button } from 'react-native';

import {ScreenProp} from '../type';



export default function Home({navigation}: ScreenProp) {
  return (
    <View style={styles.container}>
      
      <ImageBackground style={styles.image} source={{uri: 'https://i.la-croix.com/1400x933/smart/2019/02/05/1201000298/generalistes-souvent-premiers-interlocuteurs-patients-presentent-symptomes-medicalement-inexpliques_0.jpg'}} 
             resizeMode="cover">
        <Text style={styles.title}>Welcome to my Mini App</Text>
        
        <View style={styles.btnView}>
          <Pressable style={styles.buttonChoice} onPress={ () => navigation.navigate('doctor')}>
            <Text style={styles.btnText}>Doctor</Text>
          </Pressable>
          <Pressable style={styles.buttonChoice} onPress={()=> navigation.navigate('patient')}>
            <Text style={styles.btnText}>Patient</Text>
          </Pressable>
          
       
        </View>
        
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  
  title:{
    color: 'rgb(115, 147, 179)',
    fontSize: 28,
    fontWeight: "bold",
    textAlign: 'center',
  },
  btnView:{
    padding: 15,
    
  },
  buttonChoice:{
    backgroundColor:"#0000FF",
    borderTopEndRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomEndRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 10,
    marginTop:8,
    marginBottom: 8,
  },
  btnText:{
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textTransform: 'uppercase',
  },
  subcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle:{
    color: '#000000',
    fontSize: 10,
    fontWeight: "bold",
    
  },
  
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
