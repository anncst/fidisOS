import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import globalStyles from '../global/globalStyles';
import { Feather } from '@expo/vector-icons'; 

export default function Home() {
    const [search, setSearch ] = useState()
    return(
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.inputContainer}>
                <TextInput 
                    style={globalStyles.inputStyle}
                    onChangeText={(val) => setSearch(val)}
                    placeholder="Search song"
                />
                <TouchableOpacity>
                    <Text>
                        <Feather name="search" size={24} color="black" />
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.welcomeContainer}>
                <Text style={globalStyles.welcomeText}>Welcome to <Text style={{color:'#80B4FB'}}>Fidis!</Text></Text>
                <Image source={require('../assets/homeImg.png')} style={globalStyles.homeLogo}/>
                <Text style={globalStyles.text}>Find chords of your fav song,{"\n"} take guitar and play!</Text>
            </View>
        </SafeAreaView>
        
    )
}