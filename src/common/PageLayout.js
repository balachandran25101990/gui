import React from "react"
import Header from "./Header"
export default function PageLayout(props) {
    return (
        <div class="layout">
            <Header />
            {props.children}
        </div>
    )
}