import * as types from './constant';
import authApi from '../../API/GetApi';
export function ContactApi(userParams,token,url) {
    return function (dispatch) {
        console.log('token',token)
        dispatch(request());
        return authApi.Get(userParams,token,url).then(userResponse => {
            console.log('userResponse',userResponse)
            if (userResponse.records) {              
                dispatch(success(userResponse));
            } else{
                console.log('failure',userResponse)
                dispatch(failureLeads(userResponse));
            }
           
        }).catch(error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: types.CONTACT_PENDING } }
    function success(user) { return { type: types.CONTACT_SUCCESS, user } }
    function failure(error) { return { type: types.COUNTRY_FAILURE, error } }
}