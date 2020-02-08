import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import MenuItem from "./MenuItem"

class Menu extends Component {

    handleMenuRoute = (routeUrl) => {
        this.props.history.push(routeUrl)
    }
    render() {
        return (
            <div className="side-nav">
                <div className="side-nav-inner">
                    <ul className="side-nav-menu scrollable ps-container ps-theme-default" data-ps-id="33b6cbff-673d-d5a1-fdb6-d72f1c5de93c">
                        <MenuItem title="Dashboard" onClick={() => this.handleMenuRoute('/dashboard')} />
                        <MenuItem title="Create Story" onClick={() => this.handleMenuRoute('/createStory')} />
                        <MenuItem title="My Stories" onClick={() => this.handleMenuRoute('/manageStory')} />
                    </ul>
                </div>
            </div>
        )
    }
}

export default (withRouter(Menu))