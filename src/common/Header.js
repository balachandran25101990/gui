import React, { Component } from "react"
import { logout } from "../utils"
import { withRouter } from "react-router-dom"

class Header extends Component {

    handleLogout = () => {
        logout()
        this.props.history.replace('/login')
    }
    handleAllPosts = () => {
        this.props.history.push('/dashboard')
    }
    handleClick = () => {
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div class="header">
                <div class="nav-wrap">
                    <ul class="nav-left">
                        <li>
                            <button onClick={this.handleAllPosts}>
                                <i class="anticon anticon-user"></i> All Stories
                                </button>
                        </li>
                        <li>
                            <button onClick={this.handleClick}>
                                <i class="anticon anticon-user"></i> My Stories
                                </button>
                        </li>
                    </ul>
                    <ul class="nav-right">
                        <li>
                            <button className="btn btn-primary" onClick={this.handleLogout}>
                                <i class="anticon anticon-user"></i> Logout
                                </button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default (withRouter(Header))