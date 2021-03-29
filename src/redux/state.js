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

    addPost()  {
        let newPost = {
            id: 3, post: this._state.ProfilePage.newPostText, likes: 0
        }
        this._state.ProfilePage.postsData.push(newPost);
        this._state.ProfilePage.newPostText = "";
        this._callSubscriber(this._state);
    
    },

    updateNewPostText(newText) {
        this._state.ProfilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    writeMessage ()  {
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
    },

    updateNewMessageText(newMessage){
        this._state.DialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },

    subscribe(observer)  {
        this._callSubscriber = observer;
    },



}


export default store;