import React, { Component } from "react"
import PageLayout from "../common/PageLayout"
import ManageStoryContainer from "../containers/ManageStoryContainer"

export default class ManageStoriesPage extends Component {
    render() {
        return (
            <PageLayout>
                <div className="page-container no-pad">
                    <div className="main-content">
                        <div className="card">
                            <div className="card-body">
                                <h4>Manage Story</h4>
                                <div className="m-t-25">
                                    <ManageStoryContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        )
    }
}