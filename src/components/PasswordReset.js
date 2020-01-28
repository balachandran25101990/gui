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
    handleReset = (e) => {
        e.preventDefault();
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
                    <ControlLabel>Email:</ControlLabel>
                    <FormControl>
                        <i class="prefix-icon anticon anticon-user"></i>
                        <input type="email" class="form-control" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <div class="d-flex align-items-center justify-content-between">
                        <button class="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
                        <button class="btn btn-primary" onClick={this.handleReset}>Reset</button>
                    </div>
                </FormGroup>
            </form>
        )
    }
}

