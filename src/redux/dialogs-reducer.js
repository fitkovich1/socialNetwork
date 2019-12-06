const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case 'ADD-MESSAGE':
            let text = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: text}],
                newMessageText: ''
            };
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    };
};

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    };
};

export default dialogsReducer;