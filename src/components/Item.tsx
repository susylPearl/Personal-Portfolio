import React from 'react';

type ItemType = {
    id: string,
    name: string
}

type Props = {
    item: ItemType,
    removeItem: () => void
}

export const Item = (props: Props) => {
    return (
        <div className='item'>
            <li>{props.item.name}<button id='crossIcon' onClick={() => props.removeItem()}>(x)</button></li>
        </div>
    );
}