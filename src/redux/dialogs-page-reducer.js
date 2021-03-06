const WRITE_MESSAGE = "WRITE-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
    dialogsData: [
        { id: 1, name: 'Yernar' },
        { id: 2, name: 'Alisher' },
    ],
    messagesData: [
        { id: 1, message: 'Salam' },
        { id: 2, message: 'Kalaisyn?' },
    ],
    newMessageText: "test"

}

const dialogsPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case WRITE_MESSAGE: {
            let newMessage = {
                id: 3, message: state.newMessageText
            }
            let newDialog = {
                id:3, name: 'KOKSSS'
            }

            return {
                ...state,
                dialogsData: [...state.dialogsData, newDialog],
                messagesData: [...state.messagesData, newMessage],
                newMessageText: "",
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            
            return {
                ...state,
                newMessageText: action.newMessage
            };
        
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