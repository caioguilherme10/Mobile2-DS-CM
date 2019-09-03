import React, { useState } from 'react'
import { Text, View, Button, StyleSheet, TextInput } from 'react-native'

//import firebase from 'react-native-firebase'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.screen}>
            <Text>Login</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Senha"
                onChangeText={(text) => setSenha(text)}
                value={senha}
            />
            <Button title="Cadastro" onPress={()=> {
                props.navigation.navigate('Cadastro')
            }}/>
            <Button title="Logar" onPress={()=> {
                //firebase.auth().signInWithEmailAndPassword(email,senha).then(() => {
                    props.navigation.navigate('Home')
                //})
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login