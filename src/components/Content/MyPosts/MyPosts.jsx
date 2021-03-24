import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

function MyPosts() {
    return (
        <div className={classes.item}>
            <h3>My posts</h3>

            <div className={classes.addPost}>

                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={classes.posts}>
                <Post message = "I am learning React now))" likes = "77 likes"/>
                <Post message = "What are you doing?" likes = "25 likes"/>
                
            </div>
        </div>
    )


}
export default MyPosts;