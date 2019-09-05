import { ADD_AUTH_USER_FIREBASE } from "../actions/types";

const initialState = {
    uid: '',
    userToken: '',
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_AUTH_USER_FIREBASE:
            return { ...state, uid: action.payload.uid , userToken: action.payload.userToken }
        default:
            return state
    }
}

export default authReducer