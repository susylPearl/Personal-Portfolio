import { ADD_ITEM, REMOVE_ITEM } from '../const';

const defaultItems = [];

export default function(state = defaultItems, action) {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        case REMOVE_ITEM:
            const { id } = action.payload;
            return state.filter(item => item.id !== id);
        default:
            return state;
    }
}