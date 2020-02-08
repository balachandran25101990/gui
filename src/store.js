import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createPromise } from 'redux-promise-middleware'
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

export default createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(
            createPromise(),
            thunkMiddleware,
            loggerMiddleware
        )
    ))