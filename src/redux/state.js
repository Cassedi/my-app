import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";


const ADD_POST = "addPost";
const UPDATE_POST_TEXT = "updateNewPostText";
const ADD_MESSAGE = "addNewMessage";
const UPDATE_MESSAGE_TEXT = "updateNewMessageText";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: "2"},
                {id: 2, message: "It's my first post", likesCount: "5"},
                {id: 3, message: "Privet", likesCount: "4"},
                {id: 4, message: "Ola-la-la", likesCount: "10"},
            ],
            newPostText: null
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Roman"},
                {id: 4, name: "Nastya"},
                {id: 5, name: "Victor"},
                {id: 6, name: "Valera"},
            ],

            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is you life?"},
                {id: 3, message: "Nice!"},
                {id: 4, message: "Very Nice!"},
                {id: 5, message: "Bae bae!"},
            ],
            newMessageText: null
        },
        sideBar: [],
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_POST_TEXT, text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text});
export default store;
window.store = store;
