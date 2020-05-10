import * as types from '../Actions/constant';
const initialState = {
    ContactListResponse: {},
    Contacterror:''
};
export default function GetContactReducer(state = initialState, action) {
    switch (action.type) {
        case types.CONTACT_PENDING:
            return {
                ...state,
                IsContactListResponsePending: true,               
                IsContactListResponseError: false,
                IsContactListResponseSuccess: false
            };
        case types.CONTACT_FAILURE:
            return {
                ...state,
                IsContactListResponsePending:false, 
                Contacterror: action.error,
                IsContactListResponseError: true,
                IsContactListResponseSuccess: false
            };
        case types.CONTACT_SUCCESS:
            return {
                ...state,
                IsContactListResponsePending: false, 
                IsContactListResponseSuccess: true,
                ContactListResponse: action.user,
                IsContactListResponseError: false,
                Contacterror:null
            };
       
        default:
            return state;
    }
}