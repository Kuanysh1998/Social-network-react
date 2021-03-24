import { NavLink } from "react-router-dom"
import classes from "./Dialogs.module.css"

function DialogsItems(props) {
    return(
        <div className={classes.dialog}>
            <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}


function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                < DialogsItems name = "Yernar" id = "1" />
                < DialogsItems name = "Alisher" id = "2" />
            </div>

            <div className={classes.messages}>
                < Message message="Салам" />
                < Message message="Калайсын?" />
            </div>
        </div>
    )
}

export default Dialogs;