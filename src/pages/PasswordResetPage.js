import React, { Component } from "react"
import Card from "../common/Card"
import PasswordReset from "../components/PasswordReset"
export default class LoginPage extends Component {
    render() {
        return (
            <Card cardTitle="Reset Password">
                <PasswordReset />
            </Card>
        )
    }
}