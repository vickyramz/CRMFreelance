import * as types from './constant';
import authApi from '../../API/PostApi';
import * as loginUrl from '../../API/CongigUrl'

export function login(userParams,headers) {
    return function (dispatch) {
        dispatch(request());
        return authApi.getPost(userParams,headers,loginUrl.LOGIN).then(userResponse => {
            if (userResponse.user) {
                console.log('success',userResponse)
                dispatch(success(userResponse));
            } else
            console.log('failure',userResponse)
                dispatch(failure(userResponse));
        }).catch(error => {
            dispatch(userLoginFailed(error));
        });
    };
    function request() { return { type: types.LOGIN_PENDING } }
    function success(user) { return { type: types.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: types.LOGIN_FAILURE, error } }
}