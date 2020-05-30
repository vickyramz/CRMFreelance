import * as types from '../Actions/constant';
const initialState = {
    AssignToResponse: [],
    AssignToerror:''
};
export default function AssignTosReducer(state = initialState, action) {
    switch (action.type) {
        case types.ASSIGN_TO_PENDING:
            return {
                ...state,
                AssignToPending: true,               
                IsAssignToError: false,
                AssignToerror:'',
                 AssignToSuccess: false
            };
        case types.ASSIGN_TO_FAILURE:
            return {
                ...state,
                AssignToPending:false, 
                AssignToerror: action.error,
                IsAssignToError: true,
                AssignToSuccess: false
            };
        case types.ASSIGN_TO_SUCCESS:
            return {
                ...state,
                AssignToPending: false, 
                AssignToSuccess: true,
                AssignToerror:'',
                AssignToResponse: action.user,
                IsAssignToError: false
            };
       
        default:
            return state;
    }
}