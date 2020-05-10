import * as types from '../Actions/constant';
const initialState = {
    ContactGrouperror:'',
    ContactGroupListResponse:[]
};
export default function GetContactGroupReducer(state = initialState, action) {
    switch (action.type) {

            case types.CONTACT_GROUP_PENDING:
                return {
                    ...state,
                    IsContactGroupListResponsePending: true,               
                    IsContactGroupListResponseError: false,
                    IsContactGroupListResponseSuccess: false
                };
            case types.CONTACT_GROUP_FAILURE:
                return {
                    ...state,
                    IsContactGroupListResponsePending:false, 
                    ContactGrouperror: action.error,
                    IsContactGroupListResponseError: true,
                    IsContactGroupListResponseSuccess: false
                };
            case types.CONTACT_GROUP_SUCCESS:
                return {
                    ...state,
                    IsContactGroupListResponsePending: false, 
                    IsContactGroupListResponseSuccess: true,
                    ContactGroupListResponse: action.user,
                    IsContactGroupListResponseError: false,
                    ContactGrouperror:null
                };
        default:
            return state;
    }
}