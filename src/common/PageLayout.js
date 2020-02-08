import React from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
export default function PageLayout(props) {
    return (
        <div className="layout">
            <Header />
            <Menu />
            <div className="page-container">
                <div className="main-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}