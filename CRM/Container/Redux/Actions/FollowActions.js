import * as types from './constant';
import authApi from '../../API/GetApi';
export function FollowApi(userParams,token,url) {
    return function (dispatch) {
        console.log('token',token)
        dispatch(requestLeads());
        return authApi.Get(userParams,token,url).then(userResponse => {
            console.log('userResponse',userResponse)
            if (userResponse.records) {              
                dispatch(successLeads(userResponse));
            } else{
                console.log('failure',userResponse)
                dispatch(failureLeads(userResponse));
            }
           
        }).catch(error => {
            dispatch(failureLeads(error));
        });
    };
    function requestLeads() { return { type: types.FOLLOW_PENDING } }
    function successLeads(user) { return { type: types.FOLLOW_SUCCESS, user } }
    function failureLeads(error) { return { type: types.FOLLOW_FAILURE, error } }
}