import * as types from '../Actions/constant';
const initialState = {
    MeetingsResponse: [],
    Meetingserror:''
};
export default function userMeetingsReducer(state = initialState, action) {
    switch (action.type) {
        case types.MEETINGS_PENDING:
            return {
                ...state,
                MeetingsPending: true,
                MeetingsError: false,
                MeetingsSuccess: false
            };
        case types.MEETINGS_FAILURE:
            return {
                ...state,
                MeetingsPending:false, 
                Meetingserror: action.error,
                MeetingsError: true,
                MeetingsSuccess: false
            };
        case types.MEETINGS_SUCCESS:
            return {
                ...state,
                MeetingsPending: false, 
                MeetingsSuccess: true,
                MeetingsResponse: action.user,
                MeetingsError: false
            };
       
        default:
            return state;
    }
}