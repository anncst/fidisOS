import React from 'react';
import { SafeAreaView } from 'react-native';
import {View, Text, Image} from 'react-native';
import globalStyles from '../global/globalStyles';

export default function Home() {
    return(
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.welcomeText}>Welcome to <Text style={{color:'#80B4FB'}}>Fidis!</Text></Text>
            <Image source={require('../assets/homeImg.png')} style={globalStyles.homeLogo}/>
            <Text style={globalStyles.text}>Find chords of your fav song,{"\n"} take guitar and play!</Text>
        </SafeAreaView>
        
    )
}