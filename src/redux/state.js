let store = {
    _state: {
        ProfilePage: {
            postsData: [
            { id: 1, post: "I am learning React now))", likes: 777 },
            { id: 2, post: "What are you doing?", likes: 143 },
        ],
            
    
            newPostText: "Kuanysh number 1"
    },  
        DialogsPage: {
        dialogsData: [
            { id: 1, name: 'Yernar' },
            { id: 2, name: 'Alisher' },
        ],
        messagesData: [
            { id: 1, message: 'Salam' },
            { id: 2, message: 'Kalaisyn?' },
        ],
        newMessageText: "test"
    
    },
        
    },

    getState() {
        return this._state;
    },

    _callSubscriber()  {
        console.log('hello')
    },
    subscribe(observer)  {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if(action.type === ADD_POST){
            let newPost = {
                id: 3, post: this._state.ProfilePage.newPostText, likes: 0
            }
            this._state.ProfilePage.postsData.push(newPost);
            this._state.ProfilePage.newPostText = "";
            this._callSubscriber(this._state);
        

        }else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.ProfilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        }else if (action.type === WRITE_MESSAGE){
               
            let newMessage = {
                id: 3, message: this._state.DialogsPage.newMessageText
            }
            let newDialog = {
                id:3, name: 'KOKSSS'
            }
            this._state.DialogsPage.dialogsData.push(newDialog);
            this._state.DialogsPage.messagesData.push(newMessage);
            this._state.DialogsPage.newMessageText = "";
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            
            this._state.DialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }

    }



}

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const WRITE_MESSAGE = "WRITE-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export let addPostActionCreator = () => {
    return {type: ADD_POST}
}

export let updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT ,newText: text}
}

export let writeMessageActionCreator = () => {
    return {type: WRITE_MESSAGE}
}

export let updateNewMessageTextActionCreator = (text) =>{
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}
export default store;