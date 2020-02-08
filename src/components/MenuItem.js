import React from "react"

export default function MenuItem(props) {
    return (
        <li key={props.title} className="nav-item">
            <button key={props.title} className="btn" onClick={props.onClick}>
                <span className="title">{props.title}</span>
            </button>
        </li>
    )
}