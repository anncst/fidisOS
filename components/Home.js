import React from 'react';
import {View, Text} from 'react-native';
import globalStyles from '../global/globalStyles';

export default function Home() {
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.welcomeText}>Welcome to <Text style={{color:'#80B4FB'}}>Fidis</Text></Text>
        </View>
    )
}