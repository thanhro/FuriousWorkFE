import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
// import withAuthentication from "../../../components/enhancers/AuthEnhancer"
// import withScrollTop from "../../../components/enhancers/ScrollTop"
import SignUp from '../components/SignUp'
import { TestRequested } from '../actions/SignUp'

const mapStateToProps = state => {
    return {
        // id: state.session.user && state.session.user.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTestAPI: () => {
            dispatch(TestRequested())
        },
    }
}

export default compose(
    // withAuthentication,
    // withScrollTop,
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(SignUp)
