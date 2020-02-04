import React from "react"

export default function MenuItem(props) {
    return (
        <li key={props.title} class="nav-item">
            <a key={props.title} class="btn" onClick={props.onClick}>
                <span class="title">{props.title}</span>
            </a>
        </li>
    )
}