
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from './global/globalStyles';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './components/Home';
import Tabs from './components/Tabs';
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        activeColor="#cccc"
        inactiveColor="#ffff"
        labeled={false}
        barStyle={{ backgroundColor: '#80B4FB'}}
      >
            <Tab.Screen name="Home" component={Home} 
              options={{
                tabBarLabel:"Home",
                tabBarIcon: ({color}) => (<AntDesign name="home" size={24} color={color} />)
              }}
            />
            <Tab.Screen name="Tabs" component={Tabs} 
              options={{
                tabBarIcon: ({color}) => (<AntDesign name="heart" size={24} color={color} />)
              }}
            />
        </Tab.Navigator>
    </NavigationContainer>
    
  );
}