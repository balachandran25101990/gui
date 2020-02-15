import React, { Component } from "react"
import Card from "../common/Card"
import LoginContainer from "../containers/LoginContainer"
export default class LoginPage extends Component {
    render() {
        return (
            <Card cardTitle="SigIn">
                <LoginContainer />
            </Card>
        )
    }
}