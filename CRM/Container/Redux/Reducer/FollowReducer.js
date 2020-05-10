import * as types from '../Actions/constant';
const initialState = {
    FollowResponse: {},
    Followerror:''
};
export default function FollowsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FOLLOW_PENDING:
            return {
                ...state,
                FollowPending: true, 
               
                IsFollowError: false,
                FollowSuccess: false
            };
        case types.FOLLOW_FAILURE:
            return {
                ...state,
                FollowPending:false, 
                Followerror: action.error,
                IsFollowError: true,
                FollowSuccess: false
            };
        case types.FOLLOW_SUCCESS:
            return {
                ...state,
                FollowPending: false, 
                FollowSuccess: true,
                FollowResponse: action.user,
                IsFollowError: false
            };
       
        default:
            return state;
    }
}