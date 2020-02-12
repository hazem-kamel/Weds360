import {takeEvery,delay,put} from 'redux-saga/effects'
import axios from 'axios';

function* getImagesAsync(){
    delay(4000)
    const response=axios.get('http://localhost:4000/all_images');
    const payloadImages = response;
    yield put({type: 'GetImagesSaga', payload:payloadImages});   
 }
export function* watchFetchImages(){
    yield takeEvery("GetImages",getImagesAsync);
}
