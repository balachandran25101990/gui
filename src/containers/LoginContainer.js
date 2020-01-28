import React from "react"
import { connect } from 'react-redux'
import Login from "../components/Login"
// const Counter = ...

const mapDispatchToProps = (dispatch) => {
    return {
        authenticateUser
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        counter: state.counter
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
