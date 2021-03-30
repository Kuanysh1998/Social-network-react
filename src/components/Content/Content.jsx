import classes from "./Content.module.css"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Content(props) {
    
    return <div className={classes.content}>
        
        <ProfileInfo />
        <MyPosts
        postsData = {props.ProfilePage.postsData} 
        newPostText={props.ProfilePage.newPostText}
        dispatch = {props.dispatch} 
        />

        </div>
      
}
export default Content;