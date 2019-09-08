import React, { useState , useEffect, useCallback } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

import auth from '@react-native-firebase/auth'

import { useSelector , useDispatch } from 'react-redux'
import { getUser } from '../store/actions/index'

import jwtDecode from 'jwt-decode'

const Home = (props) => {

    //const [user, setUser] = useState('');
    const token = useSelector(state => state.auth.access_token)

    const dispatch = useDispatch()

    const recuperarUser = () => {
        if(token === ''){
            
        }else {
            let id2 = '5d74df0f80590f0029f7d858'
            dispatch(getUser(token,id2))
        }
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
            <Text>Nome: {inicialuser.nome}</Text>
            <Text>{inicialuser.email}</Text>
            <Text>{inicialuser.telefone}</Text>
            <Text>{inicialuser.datanascimento}</Text>
            <Text>Endereço: </Text>
            <Text>{inicialuser.endereco.rua}</Text>
            <Text>{inicialuser.endereco.bairro}</Text>
            <Text>{inicialuser.endereco.cidade}</Text>
            <Text>{inicialuser.uid}</Text>
            <Button title="Sair" onPress={()=> {
                auth().signOut()
                props.navigation.navigate('Login')
            }}/>
            <Button title="Editar" onPress={()=> {
                
            }}/>
            <Button title="Excluir" onPress={()=> {
                
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

export default Home