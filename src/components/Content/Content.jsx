import classes from "./Content.module.css"
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Content(props) {
    
    return <div className={classes.content}>
        
        <ProfileInfo />
        <MyPostsContainer store = {props.store}
        />

        </div>
      
}
export default Content;