import classes from "./Content.module.css"
import MyPosts from "./MyPosts/MyPosts"

function Content() {
    return <div className={classes.content}>
        <div>
            <img src="https://i.pinimg.com/originals/fb/74/8e/fb748e3a99febcebba1d1b4b01b972f7.jpg" />
        </div>
        <div className={classes.item}>ava+desc</div>
        <MyPosts />

        </div>
      
}
export default Content;