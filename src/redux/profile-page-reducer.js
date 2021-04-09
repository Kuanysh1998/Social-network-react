import {usersAPI} from "../api/api"

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_PROFILE_PHOTO = "SET-PROFILE-PHOTO"
let initialState = {
    postsData: [
    { id: 1, post: "I am learning React now))", likes: 777 },
    { id: 2, post: "What are you doing?", likes: 143 },
],
    

    newPostText: "Kuanysh number 1",
    profile: null
}

const profilePageReducer = (state = initialState, action) => {
    switch(action.type) {       
        case ADD_POST: {
            let newPost = {
                id: 3, post: state.newPostText, likes: 0
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: "",

            }
        }
        case UPDATE_NEW_POST_TEXT: {
            
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_PROFILE_PHOTO: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state;
    }
    
}


export const getProfile = (userId) => {return (dispatch) =>{
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setProfilePhoto(response.data))
        })

}
}




export let addPostActionCreator = () => {
    return {type: ADD_POST}
}

export let updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT ,newText: text}
}

export let setProfilePhoto = (profile) => {
    return {type: SET_PROFILE_PHOTO, profile}
}
export default profilePageReducer;