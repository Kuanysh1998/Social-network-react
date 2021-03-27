import { renderApp } from "../render";

let state = {
    ProfilePage: {
        postsData: [
        { id: 1, post: "I am learning React now))", likes: 777 },
        { id: 2, post: "What are you doing?", likes: 143 },
    ]
},
    DialogsPage: {
    dialogsData: [
        { id: 1, name: 'Yernar' },
        { id: 2, name: 'Alisher' },
    ],
    messagesData: [
        { id: 1, message: 'Salam' },
        { id: 2, message: 'Kalaisyn?' },
    ],},
    
}

export let addPost = (newPostText) => {
    let newPost = {
        id: 3, post: newPostText, likes: 0
    }
    state.ProfilePage.postsData.push(newPost);
    renderApp(state);

}

export let writeMessage = (newMessageText) => {
    let newMessage = {
        id: 3, message: newMessageText
    }
    let newDialog = {
        id:3, name: 'KOKSSS'
    }
    state.DialogsPage.dialogsData.push(newDialog);
    state.DialogsPage.messagesData.push(newMessage);
    renderApp(state);
}

export default state;