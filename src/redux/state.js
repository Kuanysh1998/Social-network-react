import { renderApp } from "../render";

let state = {
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
    
}

export let addPost = () => {
    let newPost = {
        id: 3, post: state.ProfilePage.newPostText, likes: 0
    }
    state.ProfilePage.postsData.push(newPost);
    state.ProfilePage.newPostText = "";
    renderApp(state);

}

export let updateNewPostText = (newText) => {
    state.ProfilePage.newPostText = newText;
    renderApp(state);
}

export let writeMessage = () => {
    let newMessage = {
        id: 3, message: state.DialogsPage.newMessageText
    }
    let newDialog = {
        id:3, name: 'KOKSSS'
    }
    state.DialogsPage.dialogsData.push(newDialog);
    state.DialogsPage.messagesData.push(newMessage);
    state.DialogsPage.newMessageText = "";
    renderApp(state);
}

export let updateNewMessageText = (newMessage) => {
    state.DialogsPage.newMessageText = newMessage;
    renderApp(state);
}

export default state;