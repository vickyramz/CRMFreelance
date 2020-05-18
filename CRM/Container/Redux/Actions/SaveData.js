import * as types from './constant';
import authApi from '../../API/PostApi';
export function savedata(data) {
    return function (dispatch) {
        dispatch(requestadd(data));
    }
        
    function requestadd(user) { return { type: "SavedData",user } }
   
}
