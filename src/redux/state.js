import dialogsPageReducer from "./dialogs-page-reducer";
import profilePageReducer from "./profile-page-reducer";

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
        this._state.ProfilePage = profilePageReducer(this._state.ProfilePage, action);
        this._state.DialogsPage = dialogsPageReducer(this._state.DialogsPage, action);
        this._callSubscriber(this._state);
        



}

}
    
export default store;