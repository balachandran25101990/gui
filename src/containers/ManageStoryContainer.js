import { connect } from "react-redux"
import ManageStory from "../components/ManageStory"
import { 
    getMyStories,
    deleteStory,
 } from "../actions/storyAction"

const mapDispatchToProps = (dispatch) => {
    return {
        getMyStories() {
            dispatch(getMyStories())
        },
        deleteStory(storyId) {
            dispatch(deleteStory(storyId))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.story.stories,
        isStoryDeleted: state.story.isStoryDeleted,
        isShowDeleteMessage: state.story.isShowDeleteMessage,
        deleteMessage: state.story.isShowDeleteMessage
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(ManageStory)