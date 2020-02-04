import React from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
export default function PageLayout(props) {
    return (
        <div class="layout">
            <Header />
            <Menu />
            <div class="page-container">
                <div class="main-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}