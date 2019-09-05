import React, { useState , useEffect } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

import auth from '@react-native-firebase/auth'

import { useSelector } from 'react-redux'

const Home = (props) => {

    //const [user, setUser] = useState('');

    //useEffect(() => {
    const inicialuser = useSelector(state => state.user)
    //    setUser(inicialuser)
    //},[])

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