
const ADD_POST = "addPost";
const UPDATE_POST_TEXT = "updateNewPostText";

let initialState =  {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: "2"},
            {id: 2, message: "It's my first post", likesCount: "5"},
            {id: 3, message: "Privet", likesCount: "4"},
            {id: 4, message: "Ola-la-la", likesCount: "10"},
        ],
        newPostText: null
    };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: "0",
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_POST_TEXT, text});

export default profileReducer;
