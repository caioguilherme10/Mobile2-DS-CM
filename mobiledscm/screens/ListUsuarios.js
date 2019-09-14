import React, { useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native'

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
        <ScrollView style={styles.screen}>
            <View style={styles.card}>
                <View>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      color: '#FFFFFF'
    },
})

export default ListUsuarios