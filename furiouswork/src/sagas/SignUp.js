import {
    all,
    call,
    put,
    takeLatest,
} from 'redux-saga/effects'
import * as Action from '../actions/SignUp'
// import Cookies from "universal-cookie"
import API from '../repositories/API'

function* test(action) {
    try {
        const response = yield call(
            API.get,
            {
                endpoint: '/mock',
            },
        )
        yield put(Action.TestReceived(response))
    } catch (error) {
        yield put(Action.TestReceiveFailure(yield error))
    }
}

export function* watchAuthLoaderSignUp() {
    yield all([
        takeLatest('TEST_REQUESTED', test),
    ])
}
