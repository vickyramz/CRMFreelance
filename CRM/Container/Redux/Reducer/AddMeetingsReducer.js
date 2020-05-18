import * as types from '../Actions/constant';
const initialState = {
   
    AddMeetingserror:'',
    AddMeetingsResponse:{}
};
export default function AddMeetingsReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_PENDING:
            return {
                ...state,
                AddMeetingsPending: true,               
                IsAddMeetingsError: false,
                 AddMeetingsSuccess: false
            };
        case types.ADD_FAILURE:
            return {
                ...state,
                AddMeetingsPending:false, 
                AddMeetingserror: action.error,
            IsAddMeetingsError: true,
            AddMeetingsSuccess: false
            };
        case types.ADD_SUCCESS:
            return {
                ...state,
                AddMeetingsPending: false, 
                AddMeetingsSuccess: true,
                AddMeetingsResponse: action.user,
                IsAddMeetingsError: false
            };
           
        default:
            return state;
    }
}