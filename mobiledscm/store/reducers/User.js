import { ADD_AUTH_USER_FIREBASE } from "../actions/types";

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
        default:
            return state
    }
}

export default userReducer