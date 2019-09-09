import React, { useState }  from 'react'
import { Text, View, Button, StyleSheet, TextInput } from 'react-native'

import { useSelector , useDispatch } from 'react-redux'

import { editarUser } from '../store/actions/index'

const EditUser = (props) => {

    const inicialuser = useSelector(state => state.user)
    const token = useSelector(state => state.auth.access_token)

    const [user, setUser] = useState(inicialuser)

    const dispatch = useDispatch()

    const editUser = () => {
        dispatch(editarUser(token, user))
    }

    return (
        <View style={styles.screen}>
            <Text>Editar Dados</Text>
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
            <Button title="Salvar Alterações" onPress={()=> {
                editUser()
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

export default EditUser