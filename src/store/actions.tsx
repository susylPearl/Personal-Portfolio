import { ADD_ITEM, REMOVE_ITEM } from './const';

export const addItem = (payload: any) => {
    return {
        type: ADD_ITEM,
        payload
    }
}

export const removeItem = (payload: any) => {
    return {
        type: REMOVE_ITEM,
        payload
    }
}