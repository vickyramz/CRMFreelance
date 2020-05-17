import * as types from './constant';
import authApi from '../../API/Get';
export function MeetingApi(userParams,token,url) {
    return function (dispatch) {
        console.log('token',token)
        dispatch(meetingspending());
        return authApi.get(userParams,token,url).then(userResponse => {
            
            if (userResponse) {                       
                dispatch(meetingsuccess(userResponse));
            } else{
                console.log('failure',userResponse)
                dispatch(meetingFailure(userResponse));
            }
           
        }).catch(error => {
            dispatch(meetingFailure(error));
        });
    };

}

export function meetingspending() {
    return {
      type: types.MEETINGS_PENDING,
    };
  }
  export function meetingsuccess(user) {
    return {
      type: types.MEETINGS_SUCCESS,
      user,
    };
  }
  export function meetingFailure(error) {
    return {
      type: types.MEETINGS_FAILURE,
      error,
    };
  }
