import * as types from '../Actions/constant';
const initialState = {
    BillResponse: {},
    Billerror:''
};
export default function BillsReducer(state = initialState, action) {
    switch (action.type) {
        case types.BILLS_PENDING:
            return {
                ...state,
                BillPending: true,               
                IsBillError: false,
                 BillSuccess: false
            };
        case types.BILLS_FAILURE:
            return {
                ...state,
                BillPending:false, 
                Billerror: action.error,
                IsBillError: true,
                BillSuccess: false
            };
        case types.BILLS_SUCCESS:
            return {
                ...state,
                BillPending: false, 
                BillSuccess: true,
                BillResponse: action.user,
                IsBillError: false
            };
       
        default:
            return state;
    }
}