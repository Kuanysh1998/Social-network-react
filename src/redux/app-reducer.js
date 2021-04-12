import { getUsersAuthInfo } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    appInitialized: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {       
        
        case SET_INITIALIZED: {
            return {
                ...state,
                appInitialized: true
            }
        }
        default:
            return state;   
    }
    
}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getUsersAuthInfo());
        Promise.all([promise])
        .then(()=>{
            dispatch(setInitialized());
        })
        
    }
}

export const setInitialized = () => {
    return {type: SET_INITIALIZED}
}

export default appReducer;