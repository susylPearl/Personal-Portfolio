import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import resumeDataReducer from '../reducers/resumeDataReducer';
import contactDataReducer from '../reducers/contactDataReducer';

export default function configureStore(initialState) {
    return createStore(
        combineReducers({
            resumeDataReducer,
            contactDataReducer
        }),
        applyMiddleware(thunk),
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}