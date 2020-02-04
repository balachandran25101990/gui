import React, { Component } from "react"
import FormGroup from "../common/FormGroup"
import ControlLabel from "../common/ControlLabel"
import FormControl from "../common/FormControl"
import config from "../config"
import axios from "axios"
import { getToken, getUserId } from "../utils"

export default class Story extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: "",
            isError: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleCreateStory = (e) => {
        e.preventDefault()
        const token = getToken()
        const storyData = {
            userId: getUserId(),
            title: this.state.title,
            storyBody: this.state.body
        }
        axios.post(config.sm + "createStory", storyData, { headers: { "auth-token": `${token}` } })
            .then(res => {
                console.log(res.data)
                this.setState = {
                    title: "",
                    body: ""
                }
                this.showMessage("Story Saved")
            })
            .catch(err => {
                if (err.response) {
                    this.showMessage(err.response.data.message)
                }
            })
    }
    showMessage = (msg) => this.setState({ isError: true, message: msg })
    render() {
        //const alertType = this.state.isError ? "alert alert-danger" : "alert alert-success"
        return (
            <form>
                {/* {this.state.isError ? <FormGroup><div className={alertType}>{this.state.message}</div></FormGroup> : ""} */}
                <FormGroup>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl>
                        <input type="text" class="form-control" name="title" onChange={this.handleChange} value={this.state.title} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Story</ControlLabel>
                    <FormControl>
                        <textarea class="form-control story-body" name="body" onChange={this.handleChange} value={this.state.body} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <div class="d-flex align-items-center justify-content-between">
                        <button class="btn btn-primary" onClick={this.handleCreateStory}>Save</button>
                    </div>
                </FormGroup>
            </form>
        )
    }
}