import * as types from '../Actions/constant';
const initialState = {
    AddResponse: {},
    AddContacterror:'',
    Adderror:'',
    AddContactResponse:[]
};
export default function AddReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_PENDING:
            return {
                ...state,
                AddPending: true,               
                IsAddError: false,
                 AddSuccess: false
            };
        case types.ADD_FAILURE:
            return {
                ...state,
                AddPending:false, 
            Adderror: action.error,
            IsAddError: true,
            AddSuccess: false
            };
        case types.ADD_SUCCESS:
            return {
                ...state,
                AddPending: false, 
                AddSuccess: true,
                AddResponse: action.user,
                IsAddError: false
            };
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
                    AddPeAddConatctPendingnding: false, 
                    AddContactSuccess: true,
                    AddContactResponse: action.user,
                    IsAddContactError: false
                };
        default:
            return state;
    }
}