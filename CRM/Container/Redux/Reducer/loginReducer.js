import * as types from '../Actions/constant';
const initialState = {
    loginResponse: {},
    error:''
};
export default function userLoginReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_PENDING:
            return {
                ...state,
                loginPending: true,
                loginError: false,
                loginSuccess: false
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                loginPending:false, 
                error: action.error,
                loginError: true,
                loginSuccess: false
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loginPending: false, 
                loginSuccess: true,
                loginResponse: action.user,
                loginError: false
            };
       
        default:
            return state;
    }
}