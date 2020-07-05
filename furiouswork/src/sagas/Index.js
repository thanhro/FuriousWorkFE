import { fork } from 'redux-saga/effects'
import { watchAuthLoaderSignUp } from './SignUp'

export default function* root() {
    yield fork(watchAuthLoaderSignUp)
}
