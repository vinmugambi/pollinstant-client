import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'

//remove the part below in production
const logger = (store) => (next) => (action) => {
    if (typeof action !== "function") {
        console.log('dispatching:', action);
    }
    return next(action);
}

export default function configureStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    )
}
