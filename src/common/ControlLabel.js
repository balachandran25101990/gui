import React from "react"

export default function ControlLabel(props){
    return(
        <label className="font-weight-semibold">{props.children}</label>
    )
}