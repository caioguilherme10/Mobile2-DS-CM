import { LISTAR_USERS, CADASTRAR_USER, EDITAR_USER, EXCLUIR_USER ,SALVAR_AUTH, ADD_AUTH_USER_FIREBASE } from './types';

export const addAuthUserFirebase = (uid, email, token) => {
    return {type: ADD_AUTH_USER_FIREBASE, payload: { uid: uid, email: email, userToken: token}}
}