import React, { useState } from 'react'
import { Text, View, Button, StyleSheet, TextInput, ScrollView  } from 'react-native'

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
        <ScrollView style={styles.screen}>
            <View style={styles.card}>
                <View style={styles.vtext}>
                    <Text style={styles.text}>Cadastro: </Text>
                </View>
                <View style={styles.vinput}>
                    <TextInput
                        style={{height: 40, color: '#FFFFFF'}}
                        placeholder="Email"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={(text) => setUser({ ...user ,email: text})}
                        value={user.email}
                    />
                </View>
                <View style={styles.vinput}>
                    <TextInput
                        style={{height: 40, color: '#FFFFFF'}}
                        placeholder="Senha"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                    />
                </View>
                <View style={styles.vinput}>
                    <TextInput
                        style={{height: 40, color: '#FFFFFF'}}
                        placeholder="Nome"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={(text) => setUser({...user ,nome: text})}
                        value={user.nome}
                    />
                </View>
                <View style={styles.vinput}>
                    <TextInput
                        style={{height: 40, color: '#FFFFFF'}}
                        placeholder="Telefone"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={(text) => setUser({...user ,telefone: text})}
                        value={user.telefone}
                    />
                </View>
                <View style={styles.vinput}>
                    <TextInput
                        style={{height: 40, color: '#FFFFFF'}}
                        placeholder="Data de nascimento"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={(text) => setUser({...user ,datanascimento: text})}
                        value={user.datanascimento}
                    />
                </View>
                <View style={styles.vtextE}>
                    <Text style={styles.text}>Endereco: </Text>
                </View>
                <View style={styles.vinputE}>
                    <TextInput
                        style={{height: 40, color: '#FFFFFF'}}
                        placeholder="Rua"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={(text) => {
                            let endereco = { ...user.endereco , rua: text }
                            setUser({...user , endereco: endereco })
                        }}
                        value={user.endereco.rua}
                    />
                </View>
                <View style={styles.vinputE}>
                    <TextInput
                        style={{height: 40, color: '#FFFFFF'}}
                        placeholder="Bairro"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={(text) =>{
                            let endereco = { ...user.endereco , bairro: text }
                            setUser({...user , endereco: endereco })
                        }}
                        value={user.endereco.bairro}
                    />
                </View>
                <View style={styles.vinputE}>
                    <TextInput
                        style={{height: 40, color: '#FFFFFF'}}
                        placeholder="Cidade"
                        placeholderTextColor='#FFFFFF'
                        onChangeText={(text) => {
                            let endereco = { ...user.endereco , cidade: text }
                            setUser({...user , endereco: endereco })
                        }}
                        value={user.endereco.cidade}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Cadastar" onPress={() => {register(user.email,senha)}}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#121212',
    },
    card: {
        margin: 20,
        flex: 1,
        backgroundColor: '#404040',
    },
    vtext:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10,
        marginTop: 30,
        marginLeft: 30
    },
    vtextE:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10,
        marginTop: 10,
        marginLeft: 30
    },
    text: {
        color: '#FFFFFF',
    },
    vinput: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10,
        marginLeft: 30,
        width: 250,
        marginTop: 8,
        padding: 7,
        fontSize: 16,
        color: '#7159c1',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#ccddef',
        borderStyle: 'solid',
    },
    vinputE: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10,
        width: 250,
        marginLeft: 30,
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
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Cadastro