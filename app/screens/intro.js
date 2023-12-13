import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';
import colors from '../misc/colors';
import RoundIconBtn from '../components/RoundIconBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Intro = () => {
    const [name, setName] = useState('');
    const handleOnChangeText = text => setName(text);
    /* IS THE SAME THING
    const handleOnChangeText = (text) => {
        setUser(text)
    };*/

    const handleSubmit = async () => {
        const user = { name: name }
        await AsyncStorage.setItem('user', JSON.stringify(user))
    }

    return (
        <>
            <StatusBar hidden />
            <View style={styles.container}>
                <Text style={styles.inputTitle}>Enter Your Name to Continue</Text>
                <TextInput
                    value={name}
                    onChangeText={handleOnChangeText}
                    placeholder='Enter Name'
                    style={styles.TextInput}
                />
                {name.trim().length > 3 ? (
                    <RoundIconBtn antIconName='arrowright' onPress={handleSubmit} />
                ) : null}
                {/* isso verifica se o que tem no input é suficiente para seta aparecer */}
            </View>
        </>
    )
}

const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextInput: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        color: colors.PRIMARY,
        width,
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 25,
        marginBottom: 15
    },
    inputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 25,
        marginBottom: 5,
        opacity: .5
    }
})

export default Intro;