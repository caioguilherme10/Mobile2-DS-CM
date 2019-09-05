import { LISTAR_USERS, CADASTRAR_USER, EDITAR_USER, EXCLUIR_USER ,SALVAR_AUTH, ADD_AUTH_USER_FIREBASE } from './types';

import axios from 'axios'

export const addAuthUserFirebase = (uid, email, token) => {
    return {type: ADD_AUTH_USER_FIREBASE, payload: { uid: uid, email: email, userToken: token}}
}

export const cadastrarUser = (user) => {
    return dispatch => {
        axios.post('http://192.168.99.100:3333/users',{
            nome: user.nome,
            telefone: user.telefone,
            email: user.email,
            datanascimento: user.datanascimento,
            endereco: {
                rua: user.endereco.rua,
                bairro: user.endereco.bairro,
                cidade: user.endereco.cidade
            },
            uid: user.uid
        }).then(response => {
            dispatch({
                type: CADASTRAR_USER,
                payload: response.data
            })
        }).catch(function (error) {
            console.log(error)
        })
    }
}