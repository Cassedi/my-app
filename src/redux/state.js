let rerenderEntireTree = () => {
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: "0",
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addNewMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    };
        state.dialogsPage.messages.push(newMessage);
        state.dialogsPage.newMessageText = "";
        rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;