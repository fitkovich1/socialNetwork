const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    };
};
export default dialogsReducer;