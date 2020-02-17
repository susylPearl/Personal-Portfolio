import { createStore, combineReducers } from 'redux';
import itemListReducer from './reducers/itemListReducer';
// // import removeItemReducer from './reducers/removeItemReducer';

export default function configureStore(initialState) {
    return createStore(
        combineReducers({
            itemList: itemListReducer,
        }),
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}