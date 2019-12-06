const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState =
    {
        users: [
            /*{id: 1,
                photoUrl: 'https://i.pinimg.com/236x/89/ed/b5/89edb568b29d891be761b4a94683fc9a--boston-celtics-borders-free.jpg',
                followed: false,
                fullName: 'Kolya',
                status: 'Hi, how are you feeling?',
                location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2,
                photoUrl: 'https://i.pinimg.com/236x/89/ed/b5/89edb568b29d891be761b4a94683fc9a--boston-celtics-borders-free.jpg',
                followed: true,
                fullName: 'Dima',
                status: 'Nice to meet you, bro',
                location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 3,
                photoUrl: 'https://i.pinimg.com/236x/89/ed/b5/89edb568b29d891be761b4a94683fc9a--boston-celtics-borders-free.jpg',
                followed: false,
                fullName: 'Sveta',
                status: 'I love you my darling',
                location: {city: 'Moscow', country: 'Russia'}},
            {id: 4,
                photoUrl: 'https://i.pinimg.com/236x/89/ed/b5/89edb568b29d891be761b4a94683fc9a--boston-celtics-borders-free.jpg',
                followed: true,
                fullName: 'Maksim',
                status: 'I love basketball',
                location: {city: 'London', country: 'Great Britain'}}*/
        ]
    };


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
              ...state,
              users: state.users.map(u => {
                  if(u.id === action.userId){
                      return {...u, followed: true}
                  }
                  return u;
              })
            };
        case UNFOLLOW:
            return {
              ...state,
              users: state.users.map(u => {
                  if (u.id === action.userId){
                      return {...u, followed: false}
                  }
                  return u;
              })
            };
        case SET_USERS:{
            return {...state, users: [ ...state.users, ...action.users]}
        }

        default:
            return state;
    }
};

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    };
};
export const unfollowAC = (userId) => {
    return{
        type: UNFOLLOW,
        userId
    };
};
export const setUsersAC = (users) => {
    return{
        type: SET_USERS,
        users
    };
};
export default usersReducer;