const FOLLOW = "Follow";
const UNFOLLOW = "Unfollow";
const SET_USERS = ""

let initialState = {
    usersData: [
        {
            id: 5, fullName: "Koshpanov K",
            status: "I am learning React now))",
            location: { city: "Almaty", country: "Kazakhstan" },
            followed: true,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKKRKtIclHzNaaIEb1rmkQ_EINss4gNoO0Q&usqp=CAU"
        },
        {
            id: 6,
            fullName: "Tasanov A",
            status: "I am professional back-end developer",
            location: { city: "Almaty", country: "Kazakhstan" },
            followed: true,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvozOTNpY3Tw0GI2D4wgZcb1ELfixMYf8u8Q&usqp=CAU"
        },
        {
            id: 7,
            fullName: "Akuov Y",
            status: "playing CS:GO",
            location: { city: "Almaty", country: "Kazakhstan" },
            followed: true,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tDUNd_EwQn3F0r6t8IR07a9ZYmKOzbzIYw&usqp=CAU"
        },
        {
            id: 8,
            fullName: "Kostylev",
            status: "top 1 player in the world",
            location: { city: "Kiev", country: "Ukraine" },
            followed: false,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnCUyWbhmvT-ucN82qq-wfjV7z4tkC7u0qg&usqp=CAU"
        }
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
            return {...state, usersData: [...state.usersData, action.usersData]}
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