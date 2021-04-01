import {combineReducers, createStore} from "redux"
import dialogsPageReducer from "./dialogs-page-reducer";
import profilePageReducer from "./profile-page-reducer";

let reducers = combineReducers({
    ProfilePage: profilePageReducer,
    DialogsPage: dialogsPageReducer,

});

let store = createStore(reducers);

export default store;




