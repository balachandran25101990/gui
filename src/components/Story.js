import React, { Component } from "react"

export default class Story extends Component {

    refreshStories = () => {
        this.props.getAllStories()
    }
    componentDidMount() {
        this.refreshStories()
    }
    render() {
        let rowId = 1
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Story</th>
                        <th key="date">Created On</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(this.props)}
                    {this.props.stories.map(row =>
                        <tr key={rowId++}>
                            <td key={row._id + row.title}>{row.title}</td>
                            <td key={row._id}>{row.storyBody}</td>
                            <td key={row._id + row.createdDate}>{row.createdDate}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}