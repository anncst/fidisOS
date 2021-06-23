import React, {useState} from 'react';
import { SafeAreaView, TouchableOpacity, FlatList, View, Text} from 'react-native';
import globalStyles from '../global/globalStyles';

export default function TabsList (){
    const [songs, setSongs] = useState([
        {
            title: "Shameless", author: "Camila Cabello", id: "1"
        },
        {
            title: "Dreaming out loud", author: "OneRepublic", id: "2"
        },
        {
            title: "Milena", author: "To sraka", id: "3"
        },
        {
            title: "Shameless", author: "Camila Cabello", id: "4"
        },
        {
            title: "Małpunia", author: "Jest slodka", id: "5"
        },

    ])

    return(
        <SafeAreaView style={globalStyles.container}>
                <View style={globalStyles.content}>
                    <FlatList
                        contentContainerStyle={globalStyles.list}
                        data={songs}
                        renderItem={({item}) => (
                            <TouchableOpacity>
                                <View style={globalStyles.songLine}>
                                    <Text style={globalStyles.songTitle}>{item.title}</Text>
                                    <Text style={globalStyles.songAuthor}>{item.author}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
        </SafeAreaView>
    )
}