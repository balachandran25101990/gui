import React, { Component } from "react"
import PageLayout from "../common/PageLayout"
import CreateStory from "../components/CreateStory"

export default class WriteStoryPage extends Component {
    render() {
        return (
            <PageLayout>
                <div className="page-container no-pad">
                    <div className="main-content">
                        <div className="card">
                            <div className="card-body">
                                <h4>Write a New Story</h4>
                                <div className="m-t-25">
                                    <CreateStory />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        )
    }
}