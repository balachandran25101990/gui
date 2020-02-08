import React, { Component } from "react"
import { deleteStory } from "../actions/storyAction"
import store from "../store"

export default class ManageStory extends Component {

    componentDidMount() {
        this.props.getMyStories()
    }
    handleDelete = async (storyId) => {
        await store.dispatch(deleteStory(storyId))
        this.props.getMyStories()
    }
    render() {
        let rowId = 1
        return (
            <table className="table">
                <thead>
                    <tr key="header">
                        <th key="title">Title</th>
                        <th key="story">Story</th>
                        <th key="date">Created On</th>
                        <th key="actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.isShowDeleteMessage ? (<tr><td>{this.props.deleteMessage}</td></tr>) : null}
                    {this.props.stories.map(row =>
                        <tr key={rowId++}>
                            <td key={row._id + row.title}>{row.title}</td>
                            <td key={row._id + row.title}>{row.storyBody}</td>
                            <td key={row._id + row.createdDate}>{row.createdDate}</td>
                            <td key={row._id}>
                                <button className="btn btn-danger" onClick={() => this.handleDelete(row._id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}