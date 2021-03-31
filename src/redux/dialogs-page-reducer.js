const WRITE_MESSAGE = "WRITE-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const dialogsPageReducer = (state, action) => {
    switch(action.type) {
        case WRITE_MESSAGE:
            let newMessage = {
                id: 3, message: state.newMessageText
            }
            let newDialog = {
                id:3, name: 'KOKSSS'
            }
            state.dialogsData.push(newDialog);
            state.messagesData.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default: 
            return state;


    }
    
}

export let writeMessageActionCreator = () => {
    return {type: WRITE_MESSAGE}
}

export let updateNewMessageTextActionCreator = (text) =>{
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}

export default dialogsPageReducer;