const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =
    {
        posts: [
            {id: 1, message: 'Hi, how are you feeling?', likesCount: 15, autor: "Kolya"},
            {id: 2, message: 'Nice to meet you, bro', likesCount: 20, autor: "Dima"},
            {id: 3, message: 'I love you my darling', likesCount: 5, autor: "Sveta"}
        ],
        newPostText: 'it-kamasutra.com'
    };


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 4, message: state.newPostText, likesCount: 0, autor: "Misha"};
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};
export default profileReducer;