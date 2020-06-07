import * as types from '../Actions/constant';
const initialState = {
    AddContacterror:'',  
    AddContactResponse:[]
};
export default function AddContactReducer(state = initialState, action) {
    switch (action.type) {
            case types.ADD_CONTACT_PENDING:
                return {
                    ...state,
                    AddConatctPending: true,               
                    IsAddContactError: false,
                     AddContactSuccess: false
                };
            case types.ADD_CONTACT_FAILURE:
                return {
                    ...state,
                    AddConatctPending:false, 
                AddContacterror: action.error,
                IsAddContactError: true,
                AddContactSuccess: false
                };
            case types.ADD_CONTACT_SUCCESS:
                return {
                    ...state,
                    AddConatctPending: false, 
                    AddContactSuccess: true,
                    AddContactResponse: action.user,
                    IsAddContactError: false
                };
        default:
            return state;
    }
}