import * as types from './constant';
import authApi from '../../API/PostApi';
export function AddLead(userParams,token,url) {
    return function (dispatch) {
        console.log('token',token)
        dispatch(requestadd());
        return authApi.getPost(userParams,token,url).then(userResponse => {
            console.log('userResponse',userResponse)
            if (userResponse) {              
                dispatch(successadd(userResponse));
            } else{
                console.log('failure',userResponse)
                dispatch(failureadd(userResponse));
            }
           
        }).catch(error => {
            dispatch(failureadd(error));
        });
    };
    function requestadd() { return { type: types.ADD_PENDING } }
    function successadd(user) { return { type: types.ADD_SUCCESS, user } }
    function failureadd(error) { return { type: types.ADD_FAILURE, error } }
}
export function AddContact(userParams,token,url) {
    return function (dispatch) {
        console.log('token',token)
        dispatch(requestadd());
        return authApi.getPost(userParams,token,url).then(userResponse => {
            console.log('userResponse',userResponse)
            if (userResponse) {              
                dispatch(successadd(userResponse));
            } else{
                console.log('failure',userResponse)
                dispatch(failureadd(userResponse));
            }
           
        }).catch(error => {
            dispatch(failureadd(error));
        });
    };
    function requestadd() { return { type: types.ADD_CONTACT_PENDING } }
    function successadd(user) { return { type: types.ADD_CONTACT_SUCCESS, user } }
    function failureadd(error) { return { type: types.ADD_CONTACT_FAILURE, error } }
}