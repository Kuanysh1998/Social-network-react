import classes from "./Post.module.css"

function Post(props) {
    return (
            <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJ-KpJMjDpBlfSCIvH0k5kj5t3BUm6_pJpA&usqp=CAU"/>
            {props.message}
            <div><span>{props.likes}</span></div>
            
            </div>
            
    )
}
export default Post;