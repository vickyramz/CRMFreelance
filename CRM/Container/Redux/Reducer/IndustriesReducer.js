import * as types from '../Actions/constant';
const initialState = {
    IndustriesResponse: {},
    Industrieserror:''
};
export default function IndustriesReducer(state = initialState, action) {
    switch (action.type) {
        case types.INDUSTRIES_PENDING:
            return {
                ...state,
                IndustriesPending: true,               
                IsIndustriesError: false,
                Industrieserror:'',
                 Industriesuccess: false
            };
        case types.INDUSTRIES_FAILURE:
            return {
                ...state,
                IndustriesPending:false, 
                Industrieserror: action.error,
                IsIndustriesError: true,
                Industriesuccess: false
            };
        case types.INDUSTRIES_SUCCESS:
            return {
                ...state,
                IndustriesPending: false, 
                Industriesuccess: true,
                Industrieserror:'',
                IndustriesResponse: action.user,
                IsIndustriesError: false
            };
       
        default:
            return state;
    }
}