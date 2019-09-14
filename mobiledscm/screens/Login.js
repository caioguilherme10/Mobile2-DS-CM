import React, { useState } from 'react'
import { Text, View, Button, StyleSheet, TextInput } from 'react-native'

import auth from '@react-native-firebase/auth'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <View style={styles.vtext}>
                    <Text style={styles.text}>Login: </Text>
                </View>
                <View style={styles.vinput}>
                    <TextInput
                        style={{height: 40, color: '#FFFFFF'}}
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholderTextColor='#FFFFFF'
                    />
                </View>
                <View style={styles.vinput}>
                    <TextInput
                        style={{height: 40, color: '#FFFFFF'}}
                        placeholder="Senha"
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                        placeholderTextColor='#FFFFFF'
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Logar" onPress={()=> {
                        auth().signInWithEmailAndPassword(email,senha).then(() => {
                            props.navigation.navigate('Home')
                        })
                    }}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    card: {
        margin: 20,
        width: 300,
        backgroundColor: '#404040',
    },
    text: {
        color: '#FFFFFF'
    },
    vtext: {
        margin: 10
    },
    vinput: {
        margin: 10,
        width: 280,
        marginTop: 8,
        padding: 7,
        fontSize: 16,
        color: '#7159c1',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#ccddef',
        borderStyle: 'solid',
    },
    button: {
        margin: 10
    }
})

export default Login