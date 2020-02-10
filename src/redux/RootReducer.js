import { GETALL } from "../redux/actions/actionTypes"

const initialState = {
    categories: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALL:
            return {...state, categories: action.payload}
        default:
        return state;
    }
};
export default rootReducer;