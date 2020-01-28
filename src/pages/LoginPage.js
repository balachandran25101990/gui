import React, { Component } from "react"
import Card from "../common/Card"
import Login from "../components/Login"
export default class LoginPage extends Component {
    render() {
        return (
            <Card cardTitle="SigIn">
                <Login />
            </Card>
        )
    }
}