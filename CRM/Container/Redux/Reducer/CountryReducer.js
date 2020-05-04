import * as types from '../Actions/constant';
const initialState = {
    CountryListResponse: {},
    Countryerror:''
};
export default function GetCountryReducer(state = initialState, action) {
    switch (action.type) {
        case types.COUNTRY_PENDING:
            return {
                ...state,
                IsCountryListResponsePending: true,               
                IsCountryListResponseError: false,
                IsCountryListResponseSuccess: false
            };
        case types.COUNTRY_FAILURE:
            return {
                ...state,
                IsCountryListResponsePending:false, 
                Countryerror: action.error,
                IsCountryListResponseError: true,
                IsCountryListResponseSuccess: false
            };
        case types.COUNTRY_SUCCESS:
            return {
                ...state,
                IsCountryListResponsePending: false, 
                IsCountryListResponseSuccess: true,
                CountryListResponse: action.user,
                IsCountryListResponseError: false,
                Countryerror:null
            };
       
        default:
            return state;
    }
}