import {takeLatest} from 'redux-saga/effects';
import { handleGetUser } from './handlers/user';
import {GET_USER} from '../ducks/user'


//this function will listening all actions and mapping for requests;
export function* watcherSaga() {
    yield takeLatest(GET_USER, handleGetUser)
} 