import * as types from '../Actions/constant';
const initialState = {
    LeadConverterResponse: {},
    LeadConvertererror:''
};
export default function LeadConvertersReducer(state = initialState, action) {
    switch (action.type) {
        case types.LEAD_CONTACT_PENDING:
            return {
                ...state,
                LeadConverterPending: true,               
                IsLeadConverterError: false,
                LeadConvertererror:'',
                 LeadConverterSuccess: false
            };
        case types.LEAD_CONTACT_FAILURE:
            return {
                ...state,
                LeadConverterPending:false, 
                LeadConvertererror: action.error,
                IsLeadConverterError: true,
                LeadConverterSuccess: false
            };
        case types.LEAD_CONTACT_SUCCESS:
            return {
                ...state,
                LeadConverterPending: false, 
                LeadConverterSuccess: true,
                LeadConvertererror:'',
                LeadConverterResponse: action.user,
                IsLeadConverterError: false
            };
       
        default:
            return state;
    }
}