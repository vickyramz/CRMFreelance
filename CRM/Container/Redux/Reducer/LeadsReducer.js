import * as types from '../Actions/constant';
const initialState = {
    LeadResponse: {},
    leaderror:''
};
export default function LeadsReducer(state = initialState, action) {
    switch (action.type) {
        case types.LEADS_PENDING:
            return {
                ...state,
                leadPending: true, 
               
                IsleadError: false,
                leadSuccess: false
            };
        case types.LEADS_FAILURE:
            return {
                ...state,
                leadPending:false, 
                leaderror: action.error,
                IsleadError: true,
                leadSuccess: false
            };
        case types.LEADS_SUCCESS:
            return {
                ...state,
                leadPending: false, 
                leadSuccess: true,
                LeadResponse: action.user,
                IsleadError: false
            };
       
        default:
            return state;
    }
}