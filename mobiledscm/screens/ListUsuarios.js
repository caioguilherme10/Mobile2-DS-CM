import React, { useEffect } from 'react'
import { Text, View, Button, StyleSheet, FlatList } from 'react-native'

import auth from '@react-native-firebase/auth'

import { useSelector , useDispatch } from 'react-redux'
import { listaUsers } from '../store/actions/index'

const ListUsuarios = (props) => {

    const users = useSelector(state => state.users.users)
    const token = useSelector(state => state.auth.access_token)
    const email = useSelector(state => state.user.email)

    const dispatch = useDispatch()

    const recuperarUsers = () => {
        if(users === []){
            
        }else {
            dispatch(listaUsers(token))
        }
    }

    useEffect(() => {
        recuperarUsers()
    }, [])

    return (
        <View style={styles.screen}>
            <Text>ListUsuarios</Text>
            <FlatList
                data={users}
                renderItem={({item}) => {
                    if(email === item.email){
                        return 
                    }else {
                        return <Text style={styles.item}>{item.nome}</Text>
                    }
                }}
            />
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
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
})

export default ListUsuarios