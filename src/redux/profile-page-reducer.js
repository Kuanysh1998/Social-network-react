const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    postsData: [
    { id: 1, post: "I am learning React now))", likes: 777 },
    { id: 2, post: "What are you doing?", likes: 143 },
],
    

    newPostText: "Kuanysh number 1"
}

const profilePageReducer = (state = initialState, action) => {
    switch(action.type) {       
        case ADD_POST: {
            let newPost = {
                id: 3, post: state.newPostText, likes: 0
            }

            let stateCopy = {...state};
            stateCopy.postsdata = [...state.postsData]; 
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};

            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
    
}

export let addPostActionCreator = () => {
    return {type: ADD_POST}
}

export let updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT ,newText: text}
}

export default profilePageReducer;