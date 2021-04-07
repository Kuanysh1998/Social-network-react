import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css"

function ProfileInfo(props) {
    if (!props.profile){
    return <Preloader />
}

        return(
            <div>
            <div>
                <img src="https://i.pinimg.com/originals/fb/74/8e/fb748e3a99febcebba1d1b4b01b972f7.jpg" />
            </div>
            <div className={classes.descriptionBlock}>
                <img src = {props.profile.photos.large}></img>
            <div>
                <p>{`Полное имя: ${props.profile.fullName} `} </p>
                
                <p>{`Описание: ${props.profile.lookingForAJobDescription}`} </p>
            </div>  
            </div>
       
            </div>
        )
    }

    

export default ProfileInfo;