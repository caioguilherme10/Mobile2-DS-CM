import React, { useState } from 'react'
import { Text, View, Button, StyleSheet, TextInput  } from 'react-native'

import auth from '@react-native-firebase/auth'

import { useDispatch } from 'react-redux'

import { cadastrarUser } from '../store/actions/index'

const Cadastro = (props) => {

    const [senha, setSenha] = useState('')
    const [user, setUser] = useState({
        nome: '',
        telefone: '',
        email: '',
        datanascimento: '',
        endereco: {
            rua: '',
            bairro: '',
            cidade: ''
        },
        uid: ''
    })

    const dispatch = useDispatch()

    function register(email2, senha2) {
        
        if(email2!=='' && senha2!==''){
            
            auth().createUserWithEmailAndPassword(email2, senha2).then((result) => {
                let novouser = {...user , uid: result.user.uid }
                dispatch(cadastrarUser(novouser))
                props.navigation.navigate('AuthLoading')
            })
        }
    }

    return (
        <View style={styles.screen}>
            <Text>Cadastro</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Email"
                onChangeText={(text) => setUser({ ...user ,email: text})}
                value={user.email}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Senha"
                onChangeText={(text) => setSenha(text)}
                value={senha}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Nome"
                onChangeText={(text) => setUser({...user ,nome: text})}
                value={user.nome}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Telefone"
                onChangeText={(text) => setUser({...user ,telefone: text})}
                value={user.telefone}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Data de nascimento"
                onChangeText={(text) => setUser({...user ,datanascimento: text})}
                value={user.datanascimento}
            />
            <Text>Endereco: </Text>
            <TextInput
                style={{height: 40}}
                placeholder="Rua"
                onChangeText={(text) => {
                    let endereco = { ...user.endereco , rua: text }
                    setUser({...user , endereco: endereco })
                }}
                value={user.endereco.rua}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Bairro"
                onChangeText={(text) =>{
                    let endereco = { ...user.endereco , bairro: text }
                    setUser({...user , endereco: endereco })
                }}
                value={user.endereco.bairro}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Cidade"
                onChangeText={(text) => {
                    let endereco = { ...user.endereco , cidade: text }
                    setUser({...user , endereco: endereco })
                }}
                value={user.endereco.cidade}
            />
            <Button title="Login" onPress={() => {register(user.email,senha)}}/>
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