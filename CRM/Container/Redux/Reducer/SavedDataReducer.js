import * as types from '../Actions/constant';
const initialState = {
    SelecteData: [],
 
};
export default function SelecteData(state = initialState, action) {
    switch (action.type) {
        case "SavedData":
            return {
                ...state,
                SelecteData:action.user
            };
    
       
        default:
            return state;
    }
}