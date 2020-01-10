import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from 'react'

let state =
    {
        posts: [
            {id: 1, message: 'Hi, how are you feeling?', likesCount: 15, autor: "Kolya"},
            {id: 2, message: 'Nice to meet you, bro', likesCount: 20, autor: "Dima"},
            {id: 3, message: 'I love you my darling', likesCount: 5, autor: "Sveta"}
        ]
    };


it('length of posts should be inc', () => {
    let action  = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(4);
});

it('Message of new post should be correct', () => {
    let action  = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state,action);

    expect(newState.posts[3].message).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be dec', () => {
    let action  = deletePost(1);
    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(2);
});


it(`after deleting length should't be dec if ID is incorrect`, () => {
    let action  = deletePost(1000);
    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(3);
});



