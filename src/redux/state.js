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
        }
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
        if (action.type === "addPost") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: "0",
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === "updateNewPostText") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === "addNewMessage") {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state);
        } else if (action.type === "updateNewMessageText") {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;