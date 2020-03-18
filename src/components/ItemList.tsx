import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../actions/addOrRemoveAction';
import { fetchData } from '../actions/fetchItemAction';
import { Item } from './Item';
import ItemType from '../interfaces/ItemType';

const ItemList = () => {
    const initialItem = {
        userId: "",
        id: "",
        title: "",
        completed: false
    };

    const [item, setItem] = useState(initialItem);
    const dispatch = useDispatch();
    const itemList = useSelector((state: any) => state.itemList);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleChange = useCallback((e: any) =>
    setItem({ ...item, [e.target.title]: e.target.value })
    , [item]);

    const saveItem = useCallback(() => {
        dispatch(addItem(item));
        setItem(initialItem);
    }, [dispatch, initialItem, item]);

    const deleteItem = useCallback((item: ItemType) => {
        dispatch(removeItem(item));
    }, [dispatch]);

        return (
            <div className='item-content'>
                <div className='item-content__item-input'>
                    <input
                        value={item.title}
                        onChange={handleChange}
                        type="text"
                        title="title"
                    />
                    <button id='addBtn' type="button" onClick={saveItem}>Add Item</button>
                </div>
                <div className='item-content__item-list'>
                    <ul>
                        { itemList.flat().map((item: ItemType) =>
                        <Item key={item.id} item={item} removeItem={() => deleteItem(item)}/>
                        )}
                    </ul>
                </div>
            </div>
        );
}

export default ItemList;