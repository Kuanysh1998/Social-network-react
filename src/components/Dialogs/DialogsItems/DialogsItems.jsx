import classes from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom"

function DialogsItems(props) {
    return(
        <div className={classes.dialog}>
            <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItems;