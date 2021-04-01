import React from "react";
import { writeMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-page-reducer";
import Dialogs from "./Dialogs";


function DialogsContainer(props) {
   
    let writeNewMessage = () => {
        let action = writeMessageActionCreator();
        props.store.dispatch(action);
       
    }
    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }
    return <Dialogs 
    writeMessage = {writeNewMessage} 
    updateNewMessageText = {onMessageChange}
    DialogsPage = {props.store.getState().DialogsPage}
    />
    
}

export default DialogsContainer;