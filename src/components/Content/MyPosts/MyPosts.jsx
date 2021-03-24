import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

function MyPosts() {
    return (
        <div className={classes.item}>
            My posts

            <div>

                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message = "I am learning React now))" likes = "77 likes"/>
                <Post message = "What are you doing?" likes = "25 likes"/>
                
            </div>
        </div>
    )


}
export default MyPosts;