import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

function MyPosts(props) {
    

    let postsElements = props.postsData.map(el => <Post message ={el.post} likes ={el.likes}/>);
    return (
        <div className={classes.item}>
            <h3>My posts</h3>

            <div className={classes.addPost}>

                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )


}
export default MyPosts;