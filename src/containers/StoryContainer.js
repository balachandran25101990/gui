import { connect } from 'react-redux'
import Story from "../components/Story"
import { 
    getAllStories,
} from "../actions/storyAction"

const mapDispatchToProps = (dispatch) => {
    return {
        getAllStories: dispatch(getAllStories())
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.story.stories
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Story)
