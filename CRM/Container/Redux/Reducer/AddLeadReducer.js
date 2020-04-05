import * as types from '../Actions/constant';
const initialState = {
    AddResponse: {},
    Adderror:''
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
       
        default:
            return state;
    }
}