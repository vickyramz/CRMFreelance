import * as types from '../Actions/constant';
const initialState = {
    ReopenResponse: {},
    Reopenerror:''
};
export default function Reopen(state = initialState, action) {
    switch (action.type) {
        case types.REOPEN_PENDING:
            return {
                ...state,
                ReopenPending: true, 
               
                IsReopenError: false,
                ReopenSuccess: false
            };
        case types.REOPEN_FAILURE:
            return {
                ...state,
                ReopenPending:false, 
                Reopenerror: action.error,
                IsReopenError: true,
                ReopenSuccess: false
            };
        case types.REOPEN_SUCCESS:
            return {
                ...state,
                ReopenPending: false, 
                ReopenSuccess: true,
                ReopenResponse: action.user,
                IsReopenError: false
            };
       
        default:
            return state;
    }
}