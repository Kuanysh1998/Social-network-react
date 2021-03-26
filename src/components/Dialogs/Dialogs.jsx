import classes from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";


function Dialogs(props) {
    
    let dialogsElements = props.state.dialogsData.map(el => < DialogsItems name = {el.name} id = {el.id} />);

    let messagesElements = props.state.messagesData.map(el => < Message message={el.message}/>);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                
            </div>
        </div>
    )
}

export default Dialogs;