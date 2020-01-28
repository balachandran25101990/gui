import React, { Component } from "react"
import config from "../config"
import { getToken } from "../utils"
import axios from "axios"

export default class Story extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stories: [],
        }
    }
    componentDidMount() {
        const token = getToken()
        axios.get(config.sm + "stories", { headers: { "auth-token": `${token}` } })
            .then(res => {
                this.setState({ stories: res.data.stories })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Story</th>
                    </tr>
                </thead>
                {this.state.stories.map(row =>
                    <tr key={row._id}>
                        <td key={row._id}>{row.title}</td>
                        <td key={row._id}>{row.storyBody}</td>
                    </tr>
                )}
            </table>
        )
    }
}