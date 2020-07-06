import { combineReducers } from 'redux'
import AuthenticationReducer from './Authentication'

export default combineReducers({
    authentication: AuthenticationReducer,
})
