import React, { Component } from "react"

export default class Story extends Component {

    refreshStories = () => {
        this.props.getAllStories()
    }
    componentDidMount() {
        this.refreshStories()
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
                {console.log(this.props)}
                {this.props.stories.map(row =>
                    <tr key={row._id}>
                        <td key={row._id}>{row.title}</td>
                        <td key={row._id}>{row.storyBody}</td>
                    </tr>
                )}
            </table>
        )
    }
}