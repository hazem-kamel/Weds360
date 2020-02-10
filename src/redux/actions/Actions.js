import axios from 'axios';
import { GETALL } from './actionTypes'

export function fetchCategories() {
    var url = '';
    return (dispatch) => {
        return axios.get(url).then((res) => {
            dispatch({
                type: GETALL,
                payload: res
            })
        })
    } 
}
