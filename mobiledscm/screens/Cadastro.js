import React, { useState } from 'react'
import { Text, View, Button, StyleSheet, TextInput  } from 'react-native'

import auth from '@react-native-firebase/auth'

const Cadastro = (props) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function register(email2, senha2) {
        try {
            if(email2!=='' && senha2!==''){
                await auth().createUserWithEmailAndPassword(email2, senha2)
                props.navigation.navigate('AuthLoading')
            }
        } catch (e) {
            console.error(e.message)
        }
    }

    return (
        <View style={styles.screen}>
            <Text>Cadastro</Text>
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
            <Button title="Login" onPress={() => {register(email,senha)}}/>
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

export default Cadastro