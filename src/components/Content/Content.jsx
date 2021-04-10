import classes from "./Content.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Content(props) {
    
    return <div className={classes.content}>
        
        <ProfileInfo profile = {props.profile} status = {props.status} updateProfileStatus = {props.updateProfileStatus}/>
        <MyPostsContainer store = {props.store}
        />

        </div>
      
}
export default Content;