import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import FormGroup from "../common/FormGroup"
import ControlLabel from "../common/ControlLabel"
import FormControl from "../common/FormControl"
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            redirectToLogin: false
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSignIn = (e) => {
        e.preventDefault();
        console.log("Called")
        this.props.authenticateUser();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.authenticateUser(email, password);
        }
    }
    handleCancel = (e) => {
        e.preventDefault();
        this.setState({ redirectToLogin: true })
    }
    render() {
        return (
            <form>
                {this.state.redirectToLogin ? <Redirect push to="/login" /> : ""}
                <FormGroup>
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl>
                        <input type="email" class="form-control" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl>
                        <input type="email" class="form-control" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl>
                        <input type="email" class="form-control" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl>
                        <input type="email" class="form-control" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Re-type Password</ControlLabel>
                    <FormControl>
                        <input type="email" class="form-control" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <div class="d-flex align-items-center justify-content-between">
                    <button class="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
                        <button class="btn btn-primary" onClick={this.handleSignIn}>Sign In</button>
                    </div>
                </FormGroup>
            </form>
        )
    }
}

