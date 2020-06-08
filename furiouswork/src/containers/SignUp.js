import React from "react"
import {compose} from "redux"
import {connect} from "react-redux"
import {withRouter} from "react-router"
// import withAuthentication from "../../../components/enhancers/AuthEnhancer"
// import withScrollTop from "../../../components/enhancers/ScrollTop"
import SignUp from "../components/SignUp"
const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default compose(
    // withAuthentication,
    // withScrollTop,
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(SignUp)