import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-page-reducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux"


const mapStateToProps = (state) => {
    return {newPostText: state.ProfilePage.newPostText,
            postsData: state.ProfilePage.postsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);},
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        }

    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;