import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    sidebar: sideBarReducer
});

let store = createStore(
    reducers

);

export default store;