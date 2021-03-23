import classes from "./Content.module.css"

function Content() {
    return <div className={classes.content}>
        <div>
            <img src="https://i.pinimg.com/originals/fb/74/8e/fb748e3a99febcebba1d1b4b01b972f7.jpg" />
        </div>
        <div>ava+desc</div>
        <div className={classes.posts}>My posts
            <div className={classes.item}>New post</div>
            <div className={classes.item}>Post 1</div>
            <div className={classes.item}>Post 2</div>
        </div>
    </div>

}
export default Content;