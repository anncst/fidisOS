
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './components/Home';
import Tabs from './components/Tabs';
import { AntDesign } from '@expo/vector-icons'; 
import FavoriteSongs from './components/FavoriteSongs';
import { Feather } from '@expo/vector-icons'; 
import globalStyles from './global/globalStyles';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        activeColor="#80B4FB"
        inactiveColor="#8D8D8D"
        labeled={false}
        barStyle={globalStyles.barStyle}
      >
            <Tab.Screen name="Home" component={Home} 
              options={{
                tabBarLabel:"Home",
                tabBarIcon: ({color}) => (<AntDesign name="home" size={24} color={color} /> )
              }}
            />
            <Tab.Screen name="Tabs" component={Tabs} 
              options={{
                tabBarIcon: ({color}) => (<Feather name="list" size={24} color={color} /> )
              }}
            />
            <Tab.Screen name="FavoriteSongs" component={FavoriteSongs}
              options={{
                tabBarIcon: ({color}) => (<AntDesign name="heart" size={24} color={color}/> )
              }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}