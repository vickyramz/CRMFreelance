import * as types from '../Actions/constant';
const initialState = {
    LeadSourceResponse: [],
    LeadSourceerror:''
};
export default function LeadSourcesReducer(state = initialState, action) {
    switch (action.type) {
        case types.LEADS_SOURCE_PENDING:
            return {
                ...state,
                LeadSourcePending: true,               
                IsLeadSourceError: false,
                LeadSourceerror:'',
                 LeadSourceSuccess: false
            };
        case types.LEADS_SOURCE_FAILURE:
            return {
                ...state,
                LeadSourcePending:false, 
                LeadSourceerror: action.error,
                IsLeadSourceError: true,
                LeadSourceSuccess: false
            };
        case types.LEADS_SOURCE_SUCCESS:
            return {
                ...state,
                LeadSourcePending: false, 
                LeadSourceSuccess: true,
                LeadSourceerror:'',
                LeadSourceResponse: action.user,
                IsLeadSourceError: false
            };
       
        default:
            return state;
    }
}