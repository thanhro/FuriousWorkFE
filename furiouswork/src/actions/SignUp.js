import { createAction } from 'redux-actions'

export const TestRequested = createAction('TEST_REQUESTED')
export const TestReceived = createAction('TEST_RECEIVED')
export const TestReceiveFailure = createAction('TEST_RECEIVE_FAILURE')
export const TestInit = createAction('TEST_INIT')

export const SignupRequested = createAction('SIGNUP_REQUESTED')
export const SignupReceived = createAction('SIGNUP_RECEIVED')
export const SignupReceiveFailure = createAction('SIGNUP_RECEIVE_FAILURE')
export const SignInit = createAction('SIGNUP_INIT')
