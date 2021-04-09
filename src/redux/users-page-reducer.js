import { usersAPI } from "../api/api";

const FOLLOW = "Follow";
const UNFOLLOW = "Unfollow";
const SET_USERS = "SetUsers";
const SET_CURRENT_PAGE = "SetCurrentPage";
const SET_TOTAL_COUNT_OF_USERS = "SetTotalCountOfUsers";
const GO_BACK_ACTION_CREATOR = "GoBackActionCreator";
const TOGGLE_IS_FETCHING = "ToggleIsFetching";
const TOGGLE_IS_FOLLOWING = "ToggleIsFollowing";


let initialState = {
    usersData:[],
    totalCountOfUsers: 10,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProcess: [],
    
     
         
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

        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.fetching
            }
        }

        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state, followingInProcess: action.isFollowing 
                ? [...state.followingInProcess, action.userId]
                : state.followingInProcess.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const getUsers = (currentPage, pageSize) => {
return (dispatch) => {
    dispatch(usePreloader(true));
      
    usersAPI.getUsers(currentPage, pageSize)
        .then(response=>{
            dispatch(usePreloader(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalCountOfUsers(response.data.totalCount));
        })
}
}

export const getNewPageUsers = (p, pageSize) => {
    return (dispatch) => {
        dispatch(usePreloader(true));
        dispatch(setCurrentPage(p));
        usersAPI.getUsers(p, pageSize) 
        .then(response=>{
            dispatch(usePreloader(false));
            dispatch(setUsers(response.data.items))
        })
    }
    }

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(disableFollowBtn(true, userId));
        usersAPI.followUser(userId)
        .then(response => {
            if(response.data.resultCode ===0){
            dispatch(followOK(userId) )}
            dispatch(disableFollowBtn(false, userId))
        })

    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(disableFollowBtn(true, userId));
        usersAPI.unfollowUser(userId)
        .then(response => {
            if(response.data.resultCode ===0){
            dispatch(unfollowOK(userId) )}
            dispatch(disableFollowBtn(false, userId))
        })

    }
}


            
            

export const followOK = (userID) => {
    return {type: FOLLOW, userID}
}

export const unfollowOK = (userID) => {
    return {type: UNFOLLOW, userID}
}

export const setUsers = (users) => {
    return {type: SET_USERS, users}
} 

export const setCurrentPage = (pageNumber) => {
    return {type: SET_CURRENT_PAGE, pageNumber}
}

export const setTotalCountOfUsers = (usersAmount) => {
    return {type: SET_TOTAL_COUNT_OF_USERS, usersAmount}
}

export const goBackPages = (currentPage) => {
    return {type: GO_BACK_ACTION_CREATOR, currentPage}
}

export const usePreloader = (fetching) => {
    return {type: TOGGLE_IS_FETCHING, fetching}
}

export const disableFollowBtn = (isFollowing, userId) => {
    return {type: TOGGLE_IS_FOLLOWING, isFollowing, userId}
}
export default usersPageReducer;