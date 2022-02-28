import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// REDUCER!!!=============================================================>
// form reducer for GET from App.jsx

const formReducer = (state = {
}, action) => {

    if (action.type === 'SET_FEELING') {
        const { feeling } = action.payload;
        return {
            ...state,
            feeling: feeling,
        }
    }

    if (action.type === 'SET_UNDERSTANDING') {
        const { understanding } = action.payload;
        return {
            ...state,
            understanding: understanding,
        }
    }

    if (action.type === 'SET_SUPPORT') {
        const { support } = action.payload;
        return {
            ...state,
            support: support,
        }
    }

    if (action.type === 'SET_COMMENTS') {
        const { comments } = action.payload;
        return {
            ...state,
            comments: comments,
        }
    }
    if (action.type === 'DELETE_VALUES') {
        
        return {
            ...state,
            feeling: '',
            understanding: '',
            support: '',
            comments: '',
        }
    }
    return state
};
// END REDUCER!!!==============================================================>

const storeData = createStore(
    combineReducers({
        // add reducers in here dude!, Guess we only needed one reducer :)
        formReducer,
    }),
    applyMiddleware(logger)
)


ReactDOM.render(
    <Provider store={storeData}>
        <App /> 
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();


