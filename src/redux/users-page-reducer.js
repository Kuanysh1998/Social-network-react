import * as axios from "axios";

const FOLLOW = "Follow";
const UNFOLLOW = "Unfollow";
const SET_USERS = "SetUsers";
const SET_CURRENT_PAGE = "SetCurrentPage";
const SET_TOTAL_COUNT_OF_USERS = "SetTotalCountOfUsers";
const GO_BACK_ACTION_CREATOR = "GoBackActionCreator";


let initialState = {
    usersData:[],
    totalCountOfUsers: 10,
    pageSize: 5,
    currentPage: 1,
     
         
}




const usersPageReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                usersData: state.usersData.map (u => {
                    if (u.id === action.userID){
                        return {...u, followed: true}
                    }
                    return u;
                })  
            }
        
        case UNFOLLOW: 
            return {
                ...state,
                usersData: state.usersData.map (u => {
                    if (u.id === action.userID){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        

        case SET_USERS: {
            
            return {...state, usersData: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.pageNumber
            }
        }

        case SET_TOTAL_COUNT_OF_USERS: {
            return {
                ...state, totalCountOfUsers: action.usersAmount
            }
        }

        case GO_BACK_ACTION_CREATOR: {
            return {
                ...state, currentPage: action.currentPage - 5
            }
        }
        default:
            return state;
    }
}


            
            

export const followActionCreator = (userID) => {
    return {type: FOLLOW, userID}
}

export const unfollowActionCreator = (userID) => {
    return {type: UNFOLLOW, userID}
}

export const setUsersActionCreator = (users) => {
    return {type: SET_USERS, users}
} 

export const setCurrentPageActionCreator = (pageNumber) => {
    return {type: SET_CURRENT_PAGE, pageNumber}
}

export const setTotalCountOfUsersActionCreator = (usersAmount) => {
    return {type: SET_TOTAL_COUNT_OF_USERS, usersAmount}
}

export const goBackActionCreator = (currentPage) => {
    return {type: GO_BACK_ACTION_CREATOR, currentPage}
}
export default usersPageReducer;