import React from "react";  
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

function MyPosts(props) {
    

    let postsElements = props.postsData.map(el => <Post message ={el.post} likes ={el.likes}/>);
    let newPostElement =  React.createRef();
    let addPost = () => {
        props.dispatch({type: "ADD-POST"});

    } 
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT" ,newText: text});

    }

    
    return (
        <div className={classes.item}>
            <h3>My posts</h3>

            <div className={classes.addPost}>

                <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/> </div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )


    }
export default MyPosts;