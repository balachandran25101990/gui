import React, { Component } from "react"
import Card from "../common/Card"
import Register from "../components/Register"
export default class LoginPage extends Component {
    render() {
        return (
            <Card cardTitle="Register">
                <Register />
            </Card>
        )
    }
}