import {
    all,
    call,
    put,
    takeLeading,
    takeLatest,
    select
} from "redux-saga/effects"
import _ from "lodash"
// import Cookies from "universal-cookie"
import API from "../repositories/API"

function* test(action) {
    try {
        const response = yield call(
            API.get,
            {
                endpoint: "https://5e258d80ef37a3001450ef1a.mockapi.io/mock"
            }
        )
    } catch (error){
        return null
    }
}

export function* watchAuthLoaderSignUp() {
    yield all([
        takeLatest("TEST", test)
    ])
}