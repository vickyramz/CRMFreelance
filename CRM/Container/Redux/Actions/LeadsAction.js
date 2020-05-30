import * as types from './constant';
import authApi from '../../API/GetApi';
import authApis from '../../API/Get';
export function LeadApi(userParams,token,url) {
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
    function requestLeads() { return { type: types.LEADS_PENDING } }
    function successLeads(user) { return { type: types.LEADS_SUCCESS, user } }
    function failureLeads(error) { return { type: types.LEADS_FAILURE, error } }
}
export function LeadSource(userParams,token,url) {
    return function (dispatch) {
        console.log('token',token)
        dispatch(requestLeads());
        return authApis.get(token,url).then(userResponse => {
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
    function requestLeads() { return { type: types.LEADS_SOURCE_PENDING } }
    function successLeads(user) { return { type: types.LEADS_SOURCE_SUCCESS, user } }
    function failureLeads(error) { return { type: types.LEADS_SOURCE_FAILURE, error } }
}
export function AssignTo(userParams,token,url) {
    return function (dispatch) {
        console.log('token',token)
        dispatch(requestLeads());
        return authApis.get(token,url).then(userResponse => {
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
    function requestLeads() { return { type: types.ASSIGN_TO_PENDING } }
    function successLeads(user) { return { type: types.ASSIGN_TO_SUCCESS, user } }
    function failureLeads(error) { return { type: types.ASSIGN_TO_FAILURE, error } }
}