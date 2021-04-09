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
                isAuth: true,
            }
        }
        default:
            return state;
    }
    
}

export const getUsersAuthInfo = () => {
    return (dispatch) => {
    usersAPI.getUserAuthInfo()
    .then(response => {
        if(response.data.resultCode === 0){

            let usersData = response.data.data;
            dispatch(setAuthUserData(usersData.id, usersData.email, usersData.login))
        }
    
    })
}
}

export const setAuthUserData = (userId, email, login) => {
    return {type: SET_USER_DATA, data: {userId, email, login} }
}

export default authReducer;