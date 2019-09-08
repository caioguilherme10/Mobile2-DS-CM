import { ADD_AUTH_USER_FIREBASE, CADASTRAR_USER, GET_USER } from "../actions/types";

const initialState = {
    _id: '',
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
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_AUTH_USER_FIREBASE: 
            return { ...state,  uid: action.payload.uid , email: action.payload.email }
        case CADASTRAR_USER:
            return { ...state, ...action.payload}
        case GET_USER:
            return { ...state, ...action.payload}
        default:
            return state
    }
}

export default userReducer