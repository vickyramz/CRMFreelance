import * as types from './constant';
import authApi from '../../API/PostApi';
import * as loginUrl from '../../API/CongigUrl'
export function logout() {
    return function(dispatch) {
      dispatch(userLogoutPending());
    
  }
}
  export function userLogoutPending() {
    return {
      type: types.LOGOUT_SUCCESS,
    };
  }


  