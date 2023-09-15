import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text,TextInput, View, } from 'react-native';
import {ScreenProp} from '../type';

export default function Patient({navigation}: ScreenProp) {
  const [getName, setName] = useState("");
  const [getSurname, setSurname] = useState("");
  const [getPassword, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <View>
          <Text style={styles.subtitle}>Create Your account</Text>
        </View>
        
        <View style={styles.subcontain}>
          <TextInput style={styles.enterText} placeholder='Enter your name' onChangeText={setName}></TextInput>
          <TextInput style={styles.enterText} placeholder='Enter your surname' onChangeText={setSurname}></TextInput>
          <Pressable style={styles.btnSubmit} onPress={ () => navigation.navigate('taApp')} ><Text style={styles.btnText}>Submit</Text></Pressable>
        </View>
      </View>
      
      
      <StatusBar style="auto" />
    </View>
    
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
  contain:{
    flex: 1,
    justifyContent: 'center',
  },
  subcontain:{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 12,
    

  },
  subtitle:{
    color: '#000000',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 10,
    
  },
  enterText:{
    color: "#000",
    fontSize: 15,
    margin: 9,
    borderColor: "#000",
    borderRadius: 2,
    borderWidth: 2,
  },
  btnSubmit:{
    backgroundColor:"#0000FF",
    borderTopEndRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomEndRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 8,
    margin:6,
    
  },
  btnText:{
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textTransform: 'uppercase',
  },
  
});
