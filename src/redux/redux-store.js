import {applyMiddleware, combineReducers, createStore} from "redux"
import authReducer from "./auth-reducer";
import dialogsPageReducer from "./dialogs-page-reducer";
import profilePageReducer from "./profile-page-reducer";
import usersPageReducer from "./users-page-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    ProfilePage: profilePageReducer,
    DialogsPage: dialogsPageReducer,
    UsersPage: usersPageReducer,
    Auth: authReducer,

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;




