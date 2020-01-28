import React from "react"
import { connect } from 'react-redux'
import Story from "../components/Story"
import { 
    getStories,
} from "../actions/storyAction"

const mapDispatchToProps = {
        getStories
}

const mapStateToProps = (state) => {
    return {
        userId: state.user.userId,
        stories: state.story.stories
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Story)
