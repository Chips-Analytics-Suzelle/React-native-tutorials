import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, Pressable, Button } from "react-native";


export default function GuidePatient() {
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            
            <Text style={styles.title}> Welcome </Text>
            <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
            </Text>
         
        <StatusBar style="auto" />
        </ScrollView>
      )
};


const styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 20,
      
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 6,
    },
    text: {
        fontSize: 32,
    },
});