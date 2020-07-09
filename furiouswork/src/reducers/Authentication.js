import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as Actions from '../actions/SignUp'

const AuthenticationReducer = handleActions({
    [Actions.TestRequested]: (state) => ({
        ...state,
        isFetching: true,
    }),

    [Actions.TestReceived]: (state, action) => ({
        ...state,
        isFetching: false,
        data: action.payload,
    }),

    [Actions.TestReceiveFailure]: (state, action) => ({
        ...state,
        isFetching: false,
        errors: action.payload.errors,
    }),

    [Actions.TestInit]: (state) => ({
        ...state,
        isFetching: false,
        data: {},
        errors: [],
    }),

}, {
    isFetching: false,
    data: {},
    errors: [],
})

const SignupReducer = handleActions({
    [Actions.SignupRequested]: (state) => ({
        ...state,
        isFetching: true,
    }),

    [Actions.SignupReceived]: (state, action) => ({
        ...state,
        isFetching: false,
        data: action.payload,
    }),

    [Actions.SignupReceiveFailure]: (state, action) => ({
        ...state,
        isFetching: false,
        errors: action.payload.errors,
    }),

    [Actions.SignInit]: (state) => ({
        ...state,
        isFetching: false,
        data: {},
        errors: [],
    }),

}, {
    isFetching: false,
    data: {},
    errors: [],
})

export default combineReducers({
    // authentication: AuthenticationReducer,
    authentication: SignupReducer
})
