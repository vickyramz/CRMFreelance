import * as types from './constant';
import authApi from '../../API/DeleteApi';
export function ReopenConvert(params,token,url) {
    console.log('UUUUU',url)
    return function (dispatch) {
        console.log('token',token)
        dispatch(requestLeads());
        return authApi.Delete(params,token,url).then(userResponse => {
            console.log('userResponse---------------',userResponse)
            if (userResponse) {  
                console.log('userResponse---------------',userResponse)            
                dispatch(successLeads(userResponse));
            } else{
                console.log('failure---------------',userResponse)
                console.log('failure',userResponse)
                dispatch(failureLeads(userResponse));
            }
           
        }).catch(error => {
            dispatch(failureLeads(error));
        });
    };
    function requestLeads() { return { type: types.LEAD_CONTACT_PENDING } }
    function successLeads(user) { return { type: types.LEAD_CONTACT_SUCCESS, user } }
    function failureLeads(error) { return { type: types.LEAD_CONTACT_FAILURE, error } }
}