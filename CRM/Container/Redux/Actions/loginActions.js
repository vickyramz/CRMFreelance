import * as types from './constant';
import authApi from '../../api/PostAPI';

export function login(userParams,headers) {
    return function (dispatch) {
        dispatch(request());
        return authApi.Post(userParams,headers).then(userResponse => {
            if (userResponse) {
                dispatch(success(userResponse));
            } else
                dispatch(failure(userResponse));
        }).catch(error => {
            dispatch(userLoginFailed(error));
        });
    };
    function request() { return { type: types.LOGIN_PENDING } }
    function success(user) { return { type: types.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: types.LOGIN_FAILURE, error } }
}