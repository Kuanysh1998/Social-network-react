import React from "react";  
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

function MyPosts(props) {
    

    let postsElements = props.postsData.map(el => <Post message ={el.post} likes ={el.likes}/>);
    let newPostElement =  React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";

    }

    
    return (
        <div className={classes.item}>
            <h3>My posts</h3>

            <div className={classes.addPost}>

                <div><textarea ref={newPostElement}></textarea></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )


    }
export default MyPosts;