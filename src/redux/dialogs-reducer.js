const ADD_MESSAGE = "addNewMessage";
const UPDATE_MESSAGE_TEXT = "updateNewMessageText";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text});

export default dialogsReducer;