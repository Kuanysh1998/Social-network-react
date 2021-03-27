import React from "react";
import classes from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";


function Dialogs(props) {
    
    let dialogsElements = props.state.dialogsData.map(el => < DialogsItems name = {el.name} id = {el.id} />);

    let messagesElements = props.state.messagesData.map(el => < Message message={el.message}/>);

    let newMessage = React.createRef();
    let writeNewMessage = () => {
        let text = newMessage.current.value;
        props.writeMessage(text);
        newMessage.current.value = "";
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                
            </div>
            <textarea ref={newMessage}></textarea>
            <button onClick={writeNewMessage}>Write</button>
        </div>
    )
}

export default Dialogs;