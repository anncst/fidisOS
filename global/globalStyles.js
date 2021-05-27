import {StyleSheet, PlatformColor} from 'react-native'


export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: PlatformColor("secondarySystemBackground"),
    },

    welcomeText:{
        textAlign:'center',
        fontSize: 26,
        margin: 10,
    },

    songLine:{ 
        padding: 10,
        borderBottomColor: PlatformColor('separator'),
        borderBottomWidth:0.5, 
    },

    songTitle:{
        fontSize: 20,
    },

    songAuthor:{
        fontSize: 10,
    },

    list:{
        flexGrow: 1,
    },

    content:{
        flex:1,
        backgroundColor: PlatformColor("systemBackground"),
    },

    homeLogo:{
        height:250,
        width:250,
        alignSelf:'center',
    },

    text:{
        fontSize: 20,
        margin: 30,
        textAlign:'center'
    },

    header:{
        backgroundColor: PlatformColor("secondarySystemBackground"),
        alignSelf:'stretch',
        alignItems:'center',
        borderBottomColor: PlatformColor('separator'),
        borderBottomWidth:0.5, 
        padding:10,
        
    },

    barStyle:{
        backgroundColor: PlatformColor("secondarySystemBackground"),
        borderTopColor: PlatformColor('separator'),
        borderTopWidth:0.5, 
    },

    headerText:{
        fontSize: 20,
    }
})