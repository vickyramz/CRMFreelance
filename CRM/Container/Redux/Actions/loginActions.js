import * as types from './constant';
import authApi from '../../API/PostApi';
import * as loginUrl from '../../API/CongigUrl'
export function login(userParams, headers) {
    return function(dispatch) {
      dispatch(userLoginPending());
      return authApi.getPost(userParams,headers,loginUrl.LOGIN).then(userResponse => {
        console.log('User response,',userResponse)
          if (userResponse.status && userResponse.status!='success') {
            dispatch(userLoginError(userResponse));
          } else {
            console.log('userResponse', userResponse);
            dispatch(userLoginSuccess(userResponse));
          }
        })
        .catch(error => {
          console.log('alert',error)
          dispatch(userLoginError('something went wrong'));
        });
    };
  }
  export function userLoginPending() {
    return {
      type: types.LOGIN_PENDING,
    };
  }
  export function userLoginSuccess(user) {
    return {
      type: types.LOGIN_SUCCESS,
      user,
    };
  }
  export function userLoginError(error) {
    return {
      type: types.LOGIN_FAILURE,
      error,
    };
  }
  