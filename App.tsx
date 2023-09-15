import * as React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StackParamList} from './type';

import Home from "./components/Home";
import Patient from "./components/Patient";
import GuidePatient from './components/GuidePatient';


import Ionicons from 'react-native-vector-icons/Ionicons';
import {BottomParamList} from './type';
import Colors from './constants/Colors';
import DossierMedical from './components/DossierMedical';
import DoctorProfile from './components/DoctorProfile';
import Doctor from './components/Doctor';
import { useColorScheme } from 'react-native';





const stack = createNativeStackNavigator<StackParamList>();
const Tabs = createBottomTabNavigator<BottomParamList>();

// Bottom tab navigation

function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    
      }}>
      
      <Tabs.Screen
        name="dossier"
       component={DossierMedical}
       options={{
        title: 'Health book',
        tabBarIcon: () => <Ionicons name="document" size={24} color={Colors[colorScheme ?? 'light'].tint}></Ionicons>
       }}
      />
      <Tabs.Screen
        name="guidepatient"
       component={GuidePatient}
       options={{
        title: 'Guide',
        tabBarIcon: () => <Ionicons name="book" size={24} color={Colors[colorScheme ?? 'light'].tint} ></Ionicons>,
        
       }}
      />
    </Tabs.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
     
        <stack.Screen name='home' component={Home}></stack.Screen>
        <stack.Screen name='patient' component={Patient}></stack.Screen>
        
        
        <stack.Screen name='doctor' component={Doctor}></stack.Screen>
        <stack.Screen name='doctorProfile' component={DoctorProfile}></stack.Screen>

        <stack.Screen name="taApp" component={TabLayout}></stack.Screen>

      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  icons:{
    fontSize: 24,
    fontWeight: '300',
    
  },
  

});


//<stack.Screen name='dossier' component={DossierMedical}></stack.Screen>
