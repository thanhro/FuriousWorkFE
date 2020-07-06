import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import withAuthentication from "../../../components/enhancers/AuthEnhancer"
// import withScrollTop from "../../../components/enhancers/ScrollTop"
import Home from '../components/Home'

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
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
)(Home)
