import { ADD_AUTH_USER_FIREBASE, GET_TOKEN } from "../actions/types";

const initialState = {
    uid: '',
    userToken: '',
    access_token: ''
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_AUTH_USER_FIREBASE:
            return { ...state, uid: action.payload.uid , userToken: action.payload.userToken }
        case GET_TOKEN:
            return { ...state , access_token: action.payload.access_token}
        default:
            return state
    }
}

export default authReducer