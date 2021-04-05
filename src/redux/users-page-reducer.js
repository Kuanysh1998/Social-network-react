const FOLLOW = "Follow";
const UNFOLLOW = "Unfollow";
const SET_USERS = "SetUsers";

let initialState = {
    usersData:[
        
        
    ]
     
         
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
            
            return {...state, usersData: [...state.usersData, ...action.users]}
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
export default usersPageReducer;