import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState =
    {
        posts: [
            {id: 1, message: 'Hi, how are you feeling?', likesCount: 15, autor: "Kolya"},
            {id: 2, message: 'Nice to meet you, bro', likesCount: 20, autor: "Dima"},
            {id: 3, message: 'I love you my darling', likesCount: 5, autor: "Sveta"}
        ],
        profile: null,
        status: ''
    };


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 4, message: action.newPostText, likesCount: 0, autor: "Misha"};
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            };
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    };
};
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    };
};

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
};
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
};
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
};
export default profileReducer;