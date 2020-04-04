import * as types from './constant';
import authApi from '../../API/GetApi';
export function BillApi(userParams,token,url) {
    return function (dispatch) {
        console.log('token',token)
        dispatch(requestBill());
        return authApi.Get(userParams,token,url).then(userResponse => {
            console.log('userResponse',userResponse)
            if (userResponse.records) {              
                dispatch(successBills(userResponse));
            } else{
                console.log('failure',userResponse)
                dispatch(failureBills(userResponse));
            }
           
        }).catch(error => {
            dispatch(failureLeads(error));
        });
    };
    function requestBill() { return { type: types.BILLS_PENDING } }
    function successBills(user) { return { type: types.BILLS_SUCCESS, user } }
    function failureBills(error) { return { type: types.BILLS_FAILURE, error } }
}