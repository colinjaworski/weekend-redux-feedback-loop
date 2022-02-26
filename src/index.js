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
    feeling: 0,
    understanding: 0,
    Support: 0,
    comments: '',
}, action) => {

    if (action.type === 'GET_FEELING') {
        const { feeling } = action.payload;
        return {
            ...state,
            feeling: feeling,
        }
    }

    if (action.type === 'GET_UNDERSTANDING') {
        const { understanding } = action.payload;
        return {
            ...state,
            understanding: understanding,
        }
    }

    if (action.type === 'GET_SUPPORT') {
        const { support } = action.payload;
        return {
            ...state,
            support: support,
        }
    }

    if (action.type === 'GET_COMMENTS') {
        const { comments } = action.payload;
        return {
            ...state,
            comments: comments,
        }
    };
    return state
};
// END REDUCER!!!==============================================================>

const storeData = createStore(
    combineReducers({
        // add reducers in here dude!
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


