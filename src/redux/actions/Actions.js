import axios from 'axios';
import { GetCategories,GetImages } from './actionTypes'
export function fetchCategories() {
    var url = 'http://localhost:4000/all_categories';
    return (dispatch) => {
        return axios.get(url).then((res) => {
            dispatch({
                type: GetCategories,
                payload: res.data
            })
        })
    } 
}
export function fetchImages(){
    var url ='http://localhost:4000/all_images';
    return(dispatch) => {
        return axios.get(url).then((res)=>{
            dispatch({
                type:GetImages,
                payload:res.data
            })  
        })
    }
}
