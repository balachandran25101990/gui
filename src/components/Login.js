import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import FormGroup from "../common/FormGroup"
import ControlLabel from "../common/ControlLabel"
import FormControl from "../common/FormControl"
import { authenticateUser } from "../actions/loginAction"
import store from "../store"
class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            isLoginError: false,
            isRegisterSuccess: ""
        }
    }
    componentDidMount(){
        const isUserRegistered = store.getState().user.registerSucess
        console.log()
        this.setState({
            isRegisterSuccess: isUserRegistered.length > 0 ? isUserRegistered : ""
        })
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSignIn = async (e) => {
        e.preventDefault();
        const { email, password } = this.state
        this.props.authenticateUser({ email, password })
            .then((res) => {
                this.props.history.replace('/dashboard')
            })
            .catch((err) => {
                if (err.response) {
                    this.showLoginError(err.response.data.message)
                }
            })
    }
    showLoginError = (err) => this.setState({ isLoginError: true, loginError: err })

    render() {
        return (
            <form>
                {this.state.isLoginError ? <FormGroup><div className="alert alert-danger">{this.state.loginError}</div></FormGroup> : ""}
                {this.state.isRegisterSuccess ? <FormGroup><div className="alert alert-success">{this.state.isRegisterSuccess}</div></FormGroup> : ""}
                <FormGroup>
                    <ControlLabel>Email:</ControlLabel>
                    <FormControl>
                        <i class="prefix-icon anticon anticon-user"></i>
                        <input type="email" class="form-control" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Password:</ControlLabel>
                    <Link to="/reset" className="float-right font-size-13 text-muted">Forget Password?</Link>
                    <FormControl>
                        <i class="prefix-icon anticon anticon-lock"></i>
                        <input type="password" class="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="font-size-13 text-muted">
                            Don't have an account?
                            <Link to="/register" className="small btn-empty"> Sign Up</Link>
                        </span>
                        <button class="btn btn-primary" onClick={this.handleSignIn}>Sign In</button>
                    </div>
                </FormGroup>
            </form>
        )
    }
}

Login.propTypes = {
    authenticateUser: PropTypes.func.isRequired
}

export default connect(null, { authenticateUser })(withRouter(Login))