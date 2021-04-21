import {
    LOGIN, 
    LOGOUT
} from '../actions/actionTypes'

const initialState = {
    user: null, 
    error : null
};
const user = (state = initialState, {type, payload}) => { 
    switch (type) { 
        case LOGIN:
        if (state.user) { return state } 
        return {
            user: payload.user, 
            error: payload.error, 
        }
        case LOGOUT: return { user: null, error: null }
    default:
      return state;
    } 
}
export default user