import React, { Component } from "react"
import config from "../config"
import { getToken } from "../utils"
import axios from "axios"

export default class ManageStory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stories: [],
        }
    }
    componentDidMount() {
        this.refreshStories()
    }
    refreshStories = () => {
        const token = getToken()
        axios.get(config.sm + "myStories", { headers: { "auth-token": `${token}` } })
            .then(res => {
                this.setState({ stories: res.data.stories })
            })
            .catch(err => {
                console.log(err)
            })
    }
    handleDelete = (storyId) => {
        
        const token = getToken()
        const deleteData = {
            storyId: storyId
        }
        axios.post(config.sm + "deleteStory", deleteData, { headers: { "auth-token": `${token}` } })
            .then(res => {
                this.refreshStories()
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
                        <th>Actions</th>
                    </tr>
                </thead>
                {this.state.stories.map(row =>
                    <tr key={row._id}>
                        <td key={row._id}>{row.title}</td>
                        <td key={row._id}>{row.storyBody}</td>
                        <td key={row._id}>
                            <button class="btn btn-danger" onClick={() => this.handleDelete(row._id)}>Delete</button>
                        </td>
                    </tr>
                )}
            </table>
        )
    }
}