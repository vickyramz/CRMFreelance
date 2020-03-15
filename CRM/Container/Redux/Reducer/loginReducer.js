import * as types from '../Actions/constant';
const initialState = {
    user: []
};
export default function userLoginReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_PENDING:
            return {
                loginPending: true, 
                error: null,
                loginError: false,
                loginSuccess: false
            };
        case types.LOGIN_FAILURE:
            return {
                loginPending:false, 
                error: action.error,
                loginError: true,
                loginSuccess: false
            };
        case types.LOGIN_SUCCESS:
            return {
                loginPending: false, 
                error: null, 
                loginSuccess: true,
                loginresponse: action.user,
                loginError: false
            };
       
        default:
            return state;
    }
}