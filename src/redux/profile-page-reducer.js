import {usersAPI} from "../api/api"

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_PROFILE_PHOTO = "SET-PROFILE-PHOTO"
const SET_USER_STATUS = "SET-USER-STATUS"
const UPDATE_USER_STATUS = "UPDATE-USER-STATUS"
const UPDATE_USER_AVATAR = "UPDATE-USER-AVATAR"
let initialState = {
    postsData: [
    { id: 1, post: "I am learning React now))", likes: 777 },
    { id: 2, post: "What are you doing?", likes: 143 },
],
    

    newPostText: "Kuanysh number 1",
    profile: null,
    userStatus: null,
    avatar: null
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
        case SET_USER_STATUS: {
            return {
                ...state, userStatus: action.status
            }
        }
        case UPDATE_USER_STATUS: {
            return {
                ...state, userStatus: action.status
            }
        }

        case UPDATE_USER_AVATAR: {
            return {
                ...state, profile: {...state.profile}, photos:{...state.profile.photos, large: action.photo}
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


export const getProfileStatus = (userId) => {return (dispatch) =>{
    usersAPI.getProfileStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })

}
}

export const updateProfileStatus = (status) => {return (dispatch) =>{
    usersAPI.setProfileStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
            dispatch(updateUserStatus(status))
            }
        })

}
}

export const setProfileAvatar = (file) => {return (dispatch) =>{
    usersAPI.setAvatar(file)
        .then(response => {
            if(response.data.resultCode === 0){
            dispatch(setUserAvatar(response.data.data.photos.large))
            
            }
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

export let setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status}
}

export let updateUserStatus = (status) => {
    return {type: UPDATE_USER_STATUS, status}
}

export let setUserAvatar = (photo) => {
    return {type: UPDATE_USER_AVATAR, photo }
}
export default profilePageReducer;