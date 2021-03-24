import classes from "./ProfileInfo.module.css"

function ProfileInfo() {
    return(
        <div>
        <div>
            <img src="https://i.pinimg.com/originals/fb/74/8e/fb748e3a99febcebba1d1b4b01b972f7.jpg" />
        </div>
        <div className={classes.descriptionBlock}>ava+desc</div>
        </div>
    )
}

export default ProfileInfo;