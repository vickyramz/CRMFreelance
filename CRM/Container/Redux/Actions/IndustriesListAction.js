import * as types from './constant';
import authApi from '../../API/Get';
export function IndustriesList(params,token,url) {
    console.log('UUUUU',url)
    return function (dispatch) {
        console.log('token',token)
        dispatch(requestLeads());
        return authApi.get(params,token,url).then(userResponse => {
            console.log('userResponse',userResponse)
            if (userResponse) {              
                dispatch(successLeads(userResponse));
            } else{
                console.log('failure',userResponse)
                dispatch(failureLeads(userResponse));
            }
           
        }).catch(error => {
            dispatch(failureLeads(error));
        });
    };
    function requestLeads() { return { type: types.INDUSTRIES_PENDING } }
    function successLeads(user) { return { type: types.INDUSTRIES_SUCCESS, user } }
    function failureLeads(error) { return { type: types.INDUSTRIES_FAILURE, error } }
}