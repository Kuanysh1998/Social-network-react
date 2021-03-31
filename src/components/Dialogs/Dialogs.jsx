import React from "react";
import classes from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";
import { writeMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";


function Dialogs(props) {
    
    let dialogsElements = props.DialogsPage.dialogsData.map(el => < DialogsItems name = {el.name} id = {el.id} />);

    let messagesElements = props.DialogsPage.messagesData.map(el => < Message message={el.message}/>);

    let newMessage = React.createRef();

  
    let writeNewMessage = () => {
        
        props.dispatch(writeMessageActionCreator());
       
    }
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                
            </div>
            <textarea ref={newMessage} onChange={onMessageChange} value={props.DialogsPage.newMessageText}></textarea>
            <button onClick={writeNewMessage}>Write</button>
        </div>
    )
}

export default Dialogs;