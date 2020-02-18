import { ADD_ITEM, REMOVE_ITEM } from '../const';
import ItemType from '../../interfaces/ItemType';

export const addItem = (payload: ItemType) => {
    return {
        type: ADD_ITEM,
        payload
    }
}

export const removeItem = (payload: ItemType) => {
    return {
        type: REMOVE_ITEM,
        payload
    };
}