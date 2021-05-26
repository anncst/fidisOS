import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';
import {View, Text, ScrollView} from 'react-native';
import globalStyles from '../global/globalStyles';

export default function Tabs() {
    const [songs, setSongs] = useState([
        {
            title: "Shameless", author: "Camila Cabello", id: "1"
        },
        {
            title: "Dreaming out loud", author: "OneRepublic", id: "2"
        },
        {
            title: "Shameless", author: "Camila Cabello", id: "3"
        },

    ])
    
    return( 
        <SafeAreaView style={{flex:1}}>
            <View style={globalStyles.container}>
                <View style={globalStyles.songContainer}>
                    <FlatList
                        contentContainerStyle={globalStyles.list}
                        data={songs}
                        renderItem={({item}) => (
                            <View style={globalStyles.songLine}>
                                <View>
                                    <Text style={globalStyles.songTitle}>{item.title}</Text>
                                    <Text style={globalStyles.songAuthor}>{item.author}</Text>
                                </View>  
                            </View>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
            
    )
}