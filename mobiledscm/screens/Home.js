import React, { useState , useEffect, useCallback } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

import auth from '@react-native-firebase/auth'

import { useSelector , useDispatch } from 'react-redux'
import { getUser, excluirUser } from '../store/actions/index'

//import jwtDecode from 'jwt-decode'

const Home = (props) => {

    //const [user, setUser] = useState('');
    const token = useSelector(state => state.auth.access_token)
    const uid = useSelector(state => state.auth.uid)

    const dispatch = useDispatch()

    const recuperarUser = () => {
        if(token === ''){
            
        }else {
            dispatch(getUser(token,uid))
        }
    }

    const removeUser = () => {
        dispatch(excluirUser(token,uid))
    }

    useEffect(() => {
        /* if(token === ''){
            
        }else {
            //let decoded = jwtDecode(token, {complete: true})
            //console.log(decoded)
            //let id = decoded.payload._id
            let id2 = '5d74df0f80590f0029f7d858'
            useDispatch(getUser(token,id2))
        } */
        recuperarUser()
    },[token])

    const inicialuser = useSelector(state => state.user)

    return (
        <View style={styles.screen}>
            <View style={styles.texts}>
                <Text style={styles.text}>Nome: {inicialuser.nome}</Text>
                <Text style={styles.text}>Email: {inicialuser.email}</Text>
                <Text style={styles.text}>Telefone: {inicialuser.telefone}</Text>
                <Text style={styles.text}>Data de nascimento: {inicialuser.datanascimento}</Text>
                <Text style={styles.text}>Endereço: </Text>
                <Text style={styles.text}>      Rua: {inicialuser.endereco.rua}</Text>
                <Text style={styles.text}>      Bairro: {inicialuser.endereco.bairro}</Text>
                <Text style={styles.text}>      Cidade: {inicialuser.endereco.cidade}</Text>
            </View>
            <View style={styles.buttons}>
                <Button title="Sair" onPress={()=> {
                    auth().signOut()
                    props.navigation.navigate('Login')
                }}/>
                <Button title="Editar" onPress={()=> {
                    props.navigation.navigate('EditUser')
                }}/>
                <Button title="Excluir" onPress={()=> {
                    removeUser()
                    props.navigation.navigate('Login')
                }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'
    },
    buttons: {
        flexDirection: 'row'
    },
    texts: {
        elevation: 3,
        backgroundColor: '#404040',
        padding: 30,
        margin: 10
    },
    text: {
        color: '#FFFFFF'
    }
})

export default Home