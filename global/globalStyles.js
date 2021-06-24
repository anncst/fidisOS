import {StyleSheet, PlatformColor} from 'react-native'


export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: PlatformColor("secondarySystemBackground"),
    },

    welcomeContainer:{

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
        borderBottomColor: PlatformColor('separator'),
        borderBottomWidth:0.5, 
    },

    barStyle:{
        backgroundColor: PlatformColor("secondarySystemBackground"),
        borderTopColor: PlatformColor('separator'),
        borderTopWidth:0.5, 
    },

    headerText:{
        fontSize: 24,
    },

    searchStyle:{
        backgroundColor: '#fff',
        width:'80%',
        marginLeft: 20,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
    },

    searchContainer:{
        flexDirection: "row",
        alignSelf:'center',
        alignItems: 'center',
    },

    searchButton:{
        paddingLeft: 4,
    },
    
    textInput:{
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 15,
        backgroundColor: '#fff',
        padding:6,
        
    },

    inputContainer:{
        alignItems:'center',
    },
    inputElement:{
        width:'100%',
        padding: 8,
    },
    label:{
        marginBottom: 4,
    }
})