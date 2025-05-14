const ADD_POST = "addPost";
const UPDATE_POST_TEXT = "updateNewPostText";

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: "0",
        };
        state.posts.push(newPost);
        state.newPostText = "";
    } else if (action.type === UPDATE_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state;
}

export default profileReducer;
