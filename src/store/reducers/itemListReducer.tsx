import { RECEIVED_DATA, ADD_ITEM, REMOVE_ITEM } from '../const';
import ItemType from '../../interfaces/ItemType';

type ActionProps = {
    type: string,
    payload: ItemType,
    initialData: ItemType
}

const defaultItems: ItemType[] = [];

export default function(state = defaultItems, action: ActionProps) {
    switch (action.type) {
        case RECEIVED_DATA:
            return [...state, action.initialData];
        case ADD_ITEM:
            return [...state, action.payload];
        case REMOVE_ITEM:
            const { id } = action.payload;
            return state.flat().filter(item => item.id !== id);
        default:
            return state;
    }
}