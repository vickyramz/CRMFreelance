import * as types from './constant';
import authApi from '../../API/Get';
export function GetCountryList(token,url) {
    return function (dispatch) {
        console.log('token',token)
        dispatch(requestLeads());
        return authApi.get(token,url).then(userResponse => {
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
    function requestLeads() { return { type: types.COUNTRY_PENDING } }
    function successLeads(user) { return { type: types.COUNTRY_SUCCESS, user } }
    function failureLeads(error) { return { type: types.COUNTRY_FAILURE, error } }
}

