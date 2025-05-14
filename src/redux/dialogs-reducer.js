const ADD_MESSAGE = "addNewMessage";
const UPDATE_MESSAGE_TEXT = "updateNewMessageText";

const dialogsReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 6,
            message: state.newMessageText,
        };
        state.messages.push(newMessage);
        state.newMessageText = "";
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
    }
    return state;
}

export default dialogsReducer;