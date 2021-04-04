import {combineReducers, createStore} from "redux"
import dialogsPageReducer from "./dialogs-page-reducer";
import profilePageReducer from "./profile-page-reducer";
import usersPageReducer from "./users-page-reducer";

let reducers = combineReducers({
    ProfilePage: profilePageReducer,
    DialogsPage: dialogsPageReducer,
    UsersPage: usersPageReducer,

});

let store = createStore(reducers);

export default store;




