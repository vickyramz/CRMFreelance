import * as types from './constant';
import authApi from '../../API/Get';


    export function ContactGroupApi(token,url) {
        return function (dispatch) {
            dispatch(request());
            return authApi.get(token,url).then(userResponse => {
                console.log('userResponse',userResponse)
                if (userResponse) {              
                    dispatch(success(userResponse));
                } else{
                    console.log('failure',userResponse)
                    dispatch(failure(userResponse));
                }
               
            }).catch(error => {
                dispatch(failure(error));
            });
        };
        function request() { return { type: types.CONTACT_GROUP_PENDING } }
        function success(user) { return { type: types.CONTACT_GROUP_SUCCESS, user } }
        function failure(error) { return { type: types.CONTACT_GROUP_FAILURE, error } }
    }