import {usersAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {       
        
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth,
            }
        }
        default:
            return state;   
    }
    
}

export const getUsersAuthInfo = () => {
    return (dispatch) => {
    return usersAPI.getUserAuthInfo()
    .then(response => {
        if(response.data.resultCode === 0){

            let usersData = response.data.data;
            dispatch(setAuthUserData(usersData.id, usersData.email, usersData.login, true))
        }
    
    })
}
}

export const login = (formData) => {
    return (dispatch) => {
        usersAPI.authorize(formData)
        .then(response => {
            if (response.data.resultCode ===0){
                
                dispatch(getUsersAuthInfo())
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        usersAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {type: SET_USER_DATA, data: {userId, email, login}, isAuth}
}

export default authReducer;