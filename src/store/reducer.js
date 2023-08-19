import { createStore } from "redux";

const initialState = {
    users : [],
    loggedInUser : null,
    tweets : [],
    bio:''
}
const reducer = (state=initialState, action) => {
    switch( action.type ){
        case 'REGISTER':
            return{
                ...state,
                users : [...state.users , action.payload ]
            }
        case 'LOGIN':
            return{
                ...state,
                loggedInUser : action.payload
            }
        case 'LOGOUT' :
            return{
                ...state,
                loggedInUser:null
            }
        case 'TWEET':
            return{
                ...state,
                tweets: [action.payload, ...state.tweets]
            }
        case 'REMOVE_TWEET':
            return{
                ...state,
                tweets: state.tweets.filter(tweet => tweet.id != action.payload)
            }
        case 'UPDATE_BIO':
            return{
                ...state,
                bio : action.payload
            }
            default :
            return state;
    }   
}
export default createStore(reducer)