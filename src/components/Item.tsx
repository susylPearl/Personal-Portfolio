import React from 'react';
import ItemType from '../interfaces/ItemType';

type Props = {
    item: ItemType,
    removeItem: () => void
}

export const Item = (props: Props) => {
    return (
        <div className='item'>
            <li>{props.item.title}<button id='crossIcon' onClick={() => props.removeItem()}>(x)</button></li>
        </div>
    );
}