import { connect } from 'react-redux'
import Login from "../components/Login"
import { authenticateUser } from "../actions/loginAction"

const mapDispatchToProps = () => {
    return {
        authenticateUser: authenticateUser()
    }
}

const mapStateToProps = (state) => {
    return {
        isRegistered: state.user.isRegistered
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
