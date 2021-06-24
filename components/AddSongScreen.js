import React from 'react'
import {SafeAreaView, View, TextInput, Text, Button} from 'react-native';
import { Formik } from 'formik';
import globalStyles from '../global/globalStyles';

export default function AddSongScreen (){

    return( 
        <SafeAreaView>
            <Formik
                initialValues={{title:'', author:''}}
                onSubmit={values => console.log(values)}>
                {({values, handleChange, handleSubmit}) => (
                    <View style={globalStyles.inputContainer}>
                        <View style={globalStyles.inputElement}>
                            <Text style={globalStyles.label}>Title</Text>
                            <TextInput 
                                onChangeText={handleChange('title')}
                                value={values.title}
                                style={globalStyles.textInput}
                            />
                        </View>
                        <View style={globalStyles.inputElement}>
                            <Text style={globalStyles.label}>Author</Text>
                            <TextInput 
                                onChangeText={handleChange('author')}
                                value={values.author}
                                style={globalStyles.textInput}
                            />
                        </View>
                        <Button 
                            title="Save"
                            onPress={handleSubmit}
                        />
                    </View>
                )}
                
            </Formik>
        </SafeAreaView>
    )
}