import { all, takeLatest } from 'redux-saga/effects';
import actions from '../actions';
import sleep from '../../utils/sleep';
import { setCookie } from '../../utils/cookie';

function* verifyUserSaga({ userToken }) {
    try {
        yield sleep(1000);
        setCookie('accessToken', userToken);
    } catch (error) {
        setCookie('accessToken', null);
    }
}

export default function* rootSaga() {
    yield all([takeLatest(actions.auth.actionTypes.VERIFY_USER, verifyUserSaga)]);
}
