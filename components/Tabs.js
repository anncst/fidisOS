import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabsList from './TabsList';
import { TouchableOpacity } from 'react-native';
import globalStyles from '../global/globalStyles';
import { Ionicons } from '@expo/vector-icons'; 
import AddSongScreen from './AddSongScreen';

const Stack = createStackNavigator(); 

export default function Tabs() {
    
    return( 
        <Stack.Navigator>
            <Stack.Screen 
                name={"Top Songs"} 
                options= { ({navigation}) => ({
                    headerRight: () => (
                        <TouchableOpacity style={globalStyles.addSongButton} onPress={() => navigation.navigate('Add Song')}>
                            <Ionicons name="add" size={30} color="black" />
                        </TouchableOpacity>
                    ),
                    headerStyle: globalStyles.header
                })}
                component={TabsList}
            />
            <Stack.Screen 
                name="Add Song"
                component={AddSongScreen}
            />
        </Stack.Navigator>
        
            
    )
}