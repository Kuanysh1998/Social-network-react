import React from "react";  
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profile-page-reducer"
import MyPosts from "../MyPosts";



function MyPostsContainer(props) {

    let onAddPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);

    } 
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);

    }

    
    return <MyPosts 
    updateNewPostText = {onPostChange}
    addPost = {onAddPost} 
    postsData = {props.store.getState().ProfilePage.postsData}
    newPostText = {props.store.getState().ProfilePage.newPostText}/>

    


    }
export default MyPostsContainer;