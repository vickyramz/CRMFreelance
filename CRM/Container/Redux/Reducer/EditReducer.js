import * as types from '../Actions/constant';
const initialState = {
    EditResponse: {},
    Editerror:''
};
export default function EditsReducer(state = initialState, action) {
    switch (action.type) {
        case types.EDIT_PENDING:
            return {
                ...state,
                EditPending: true,             
                IsEditError: false,
                EditSuccess: false
            };
        case types.EDIT_FAILURE:
            return {
                ...state,
                EditPending:false, 
                Editerror: action.error,
                IsEditError: true,
                EditSuccess: false
            };
        case types.EDIT_SUCCESS:
            return {
                ...state,
                EditPending: false, 
                EditSuccess: true,
                EditResponse: action.user,
                IsEditError: false
            };
       
        default:
            return state;
    }
}