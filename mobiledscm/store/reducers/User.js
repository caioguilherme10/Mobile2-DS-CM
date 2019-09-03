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
    }
}

const userReducer = (state = initialState, action) => {
    return state
}

export default userReducer