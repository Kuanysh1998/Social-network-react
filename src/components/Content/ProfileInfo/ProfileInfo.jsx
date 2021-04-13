import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
    if (!props.profile){
    return <Preloader />
}
        
        let onFileSelected = (event) => {
            if (event.target.files.length) {
                props.setProfileAvatar(event.target.files[0])
            }
        }
        console.log(props)
        return(
            <div>
            <div>
                <img src="https://i.pinimg.com/originals/fb/74/8e/fb748e3a99febcebba1d1b4b01b972f7.jpg" />
            </div>
            <div className={classes.descriptionBlock}>
                <img src = {props.profile.photos.large}></img>
                {props.profile.userId === props.userId ? <input type = "file" 
                onChange = {onFileSelected}></input> : null}
            <div>
                <p>{`Полное имя: ${props.profile.fullName} `} </p>
                
                <p>{`Описание: ${props.profile.lookingForAJobDescription}`} </p>
            </div>  
            <ProfileStatus status = {props.status} updateProfileStatus = {props.updateProfileStatus}/>
            </div>
       
            </div>
        )
    }

    

export default ProfileInfo;