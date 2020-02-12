import { GetCategories , GetImages } from "../redux/actions/actionTypes"
const initialState = {
    categories: [],
    images:[]
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetCategories:
            return {...state, categories:action.payload}
        case GetImages:
            return{...state,images:action.payload}
        default:
        return state;
    }
};
export default rootReducer;