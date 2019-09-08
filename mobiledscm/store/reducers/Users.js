import { LISTAR_USERS } from "../actions/types";

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case LISTAR_USERS:
            return { ...state, users: action.payload}
        default:
            return state
    }
}

export default usersReducer