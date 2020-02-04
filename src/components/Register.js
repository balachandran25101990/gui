import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import config from "../config"
import axios from "axios"
import store from "../store"
import FormGroup from "../common/FormGroup"
import ControlLabel from "../common/ControlLabel"
import FormControl from "../common/FormControl"
import {
    USER_REGISTARTION_SUCCESS
} from "../const"
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            retypePassword: "",
            registerError: "",
            isRegisterError: false,
            redirectToLogin: false
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleRegister = (e) => {
        e.preventDefault();
        const userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password
        }
        axios.post(config.um + "register", userData)
            .then(res => {
                console.log(res.data)
                this.setState({ redirectToLogin: true })
                store.dispatch({
                    type: USER_REGISTARTION_SUCCESS,
                    payload: res.data.message
                })
            })
            .catch(err => {
                if (err.response) {
                    this.setState({
                        isRegisterError: true,
                        registerError: err.response.data.message
                    })
                }
            })
    }
    handleCancel = (e) => {
        e.preventDefault();
        this.setState({ redirectToLogin: true })
    }
    render() {
        return (
            <form>
                {this.state.isRegisterError ? <FormGroup><div className="alert alert-danger">{this.state.registerError}</div></FormGroup> : ""}
                {this.state.redirectToLogin ? <Redirect push to="/login" /> : ""}
                <FormGroup>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl>
                            <input type="email" class="form-control" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
                        </FormControl>
                    </FormGroup>
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl>
                        <input type="email" class="form-control" placeholder="firstName" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl>
                        <input type="email" class="form-control" placeholder="lastName" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                    </FormControl>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>phoneNumber</ControlLabel>
                    <FormControl>
                        <input type="email" class="form-control" placeholder="phoneNumber" name="phoneNumber" onChange={this.handleChange} value={this.state.phoneNumber} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl>
                        <input type="password" class="form-control" placeholder="password" name="password" onChange={this.handleChange} value={this.state.password} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Re-type Password</ControlLabel>
                    <FormControl>
                        <input type="password" class="form-control" placeholder="Email" name="retypePassword" onChange={this.handleChange} value={this.state.retypePassword} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <div class="d-flex align-items-center justify-content-between">
                        <button class="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
                        <button class="btn btn-primary" onClick={this.handleRegister}>Sign In</button>
                    </div>
                </FormGroup>
            </form>
        )
    }
}

