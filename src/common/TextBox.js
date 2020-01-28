import React from "react"

export default function Text(props) {
    return (
        <div class="form-group">
            <label class="font-weight-semibold" for="userName">{props.label}</label>
            <div class="input-affix">
                <i class="prefix-icon anticon anticon-user"></i>
                <input type="text" class="form-control" placeholder={props.label} />
            </div>
        </div>
    )
}