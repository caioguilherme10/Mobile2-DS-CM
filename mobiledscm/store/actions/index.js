import { LISTAR_USERS, CADASTRAR_USER, EDITAR_USER, EXCLUIR_USER ,SALVAR_AUTH, ADD_AUTH_USER_FIREBASE, GET_TOKEN, GET_USER } from './types';

import axios from 'axios'

export const addAuthUserFirebase = (uid, email, token) => {
    return {type: ADD_AUTH_USER_FIREBASE, payload: { uid: uid, email: email, userToken: token}}
}

export const getToken = (uid) => {
    return dispatch => {
        axios.get(`http://192.168.99.100:3333/users/login/${uid}`
        ).then(response => {
            dispatch({
                type: GET_TOKEN,
                payload: response.data
            })
        }).catch(function (error) {
            console.log(error)
        })
    }
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

export const getUser = (token , id) => {
    return dispatch => {
        axios.get(`http://192.168.99.100:3333/users/${id}`, {
            headers: { 
                Authorization: "Bearer " + token
            }
        }).then(response => {
            dispatch({
                type: GET_USER,
                payload: response.data
            })
        }).catch(function (error) {
            console.log(error)
        })
    }
}

export const listaUsers = (token) => {
    return dispatch => {
        axios.get('http://192.168.99.100:3333/users', {
            headers: { 
                Authorization: "Bearer " + token
            }
        }).then(response => {
            dispatch({
                type: LISTAR_USERS,
                payload: response.data
            })
        }).catch(function (error) {
            console.log(error)
        })
    }
}

export const editarUser = (token, user) => {
    return dispatch => {
        axios.put(`http://192.168.99.100:3333/users/${user._id}`,{
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
        },{
            headers: { 
                Authorization: "Bearer " + token
            }
        }
        ).then(response => {
            dispatch({
                type: EDITAR_USER,
                payload: response.data
            })
        }).catch(function (error) {
            console.log(error)
        })
    }
}