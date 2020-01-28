import React, { Component } from "react"
import PageLayout from "../common/PageLayout"
import Story from "../components/Story"

export default class DashboardPage extends Component {
    render() {
        return (
            <PageLayout>
                <div class="page-container no-pad">
                    <div class="main-content">
                        <div class="card">
                            <div class="card-body">
                                <h4>All Posts</h4>
                                <div class="m-t-25">
                                    <Story />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        )
    }
}