import { createAction } from 'redux-actions'

export const TestRequested = createAction('TEST_REQUESTED')
export const TestReceived = createAction('TEST_RECEIVED')
export const TestReceiveFailure = createAction('TEST_RECEIVE_FAILURE')
export const TestInit = createAction('TEST_INIT')
