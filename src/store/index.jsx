import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import itemListReducer from './reducers/itemListReducer';

export default function configureStore(initialState) {
    return createStore(
        combineReducers({
            itemList: itemListReducer,
        }),
        applyMiddleware(thunk),
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}