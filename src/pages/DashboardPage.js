import React, { Component } from "react"
import PageLayout from "../common/PageLayout"
import StoryContainer from "../containers/StoryContainer"

export default class DashboardPage extends Component {
    render() {
        return (
            <PageLayout>
                <div className="page-container no-pad">
                    <div className="main-content">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="page-header">Recent Stories</h4>
                                <div className="m-t-25">
                                    <StoryContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        )
    }
}