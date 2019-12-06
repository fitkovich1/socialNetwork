import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1, message: 'Hi, how are you feeling?', likesCount: 15, autor: "Kolya"},
                {id: 2, message: 'Nice to meet you, bro', likesCount: 20, autor: "Dima"},
                {id: 3, message: 'I love you my darling', likesCount: 5, autor: "Sveta"}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Kolya'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Dimych'},
                {id: 4, name: 'Maksim'},
                {id: 5, name: 'Dasha'}
            ],
            messages: [
                {id: 1, message: 'Hi, men!!!'},
                {id: 2, message: 'Kate loves my hair!'},
                {id: 3, message: 'YO, come on!'},
                {id: 4, message: 'WOW, you are amazing!'},
                {id: 5, message: 'Fuck your self, motherfucker'}
            ],
            newMessageText: 'it-incubator.com'
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;                  // observer(паттерн)
    },
    dispatch (action) {     // action это объект который описывает какое действие совершить, должно быть свойство type: 'Название действия большими буквами';
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
};
export default store;
window.store = store;