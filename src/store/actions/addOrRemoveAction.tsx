import { ADD_ITEM, REMOVE_ITEM } from '../const';
import ItemType from '../../interfaces/ItemType';

let itemId = 11111;
export const addItem = (addedItem: ItemType) => {
    return {
        type: ADD_ITEM,
        payload: {
            ...addedItem,
            id: itemId++
        }
    }
}

export const removeItem = (payload: ItemType) => {
    return {
        type: REMOVE_ITEM,
        payload
    };
}