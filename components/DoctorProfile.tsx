import * as React from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScreenProp3 } from '../type';



export default function DoctorProfile({route}: ScreenProp3) {

   

    return(
        <View style={styles.container}>
            <View style={styles.contain}>
                <View style={styles.containImage}>
                  <Image source={{uri: 'https://media.istockphoto.com/id/1193303828/fr/photo/verticale-de-docteur-afro-am%C3%A9ricain-f%C3%A9minin-restant-dans-son-bureau-%C3%A0-la-clinique.jpg?s=612x612&w=0&k=20&c=xwRL1zqIB1U-nG7iY1Q2Cc5iigfsN0MNyPuyKoQxU94='}} 
                  resizeMode='contain'></Image>
                </View>
            
                <View style={styles.subcontain}>
                    <View style={styles.textView}>
                      <Text>Name: </Text>
                    </View>
                    <View style={styles.textView}>
                      <Text> {JSON.stringify(route.params.name)} </Text>
                    </View>
                    <View style={styles.textView}>
                      <Text>Surname: </Text>
                    </View>
                    <View style={styles.textView}> 
                      <Text> {JSON.stringify(route.params.surname)} </Text>
                    </View>
                    <View style={styles.textView}>
                      <Text>Profession: </Text>
                    </View>
                    <View style={styles.textView}>
                      <Text> {JSON.stringify(route.params.profession)} </Text>
                    </View>
                </View>
              
            </View>
            <View style={styles.bottomView}>
              <Text style={styles.bottomText}>Certifed Doctor</Text>
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
    alignItems: 'center',
  },
  subcontain:{
    display: 'flex',
    
    marginHorizontal: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: 8,
  },
  subtitle:{
    color: '#000000',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 10,
    
  },
  containImage: {
    flex: 0.2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textView: {
    width: '50%',
    padding: 10,
    
  },
  bottomView: {
    display: 'flex',
    justifyContent: 'flex-end',
  
  },
  bottomText:{
    color: 'grey',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 12,
  },
    
})


