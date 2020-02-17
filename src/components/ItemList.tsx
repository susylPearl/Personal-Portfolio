import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../store/actions';
import { Item } from './Item';

type ItemType = {
    id: string,
    name: string
}
type State = {
    item: ItemType,
}

type Props = {
    item: ItemType,
    itemList: Array<ItemType>,
    actions: {
        addItem: (value: ItemType) => void,
        removeItem: (value: ItemType) => void
    }
}

class ItemList extends React.Component<Props, State> {
    state = {
        item: {
            id: Date.now().toString(),
            name: ""
        },
    }

    handleChange = (e: any) => {
        this.setState({
            item: {
                ...this.state.item,
                [e.target.name]: e.target.value
            }
        });
    }

    addItem = () => {
        this.props.actions.addItem(this.state.item);
        this.setState({
            item: {
                id: Date.now().toString(),
                name: ""
            }
        })
    }

    removeItem = (item: ItemType) => () => {
        this.props.actions.removeItem(item);
    }

    render(){
        return (
            <div className='item-content'>
                <div className='item-content__item-input'>
                    <input
                        value={this.state.item.name}
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                    />
                    <button id='addBtn' onClick={this.addItem}>Add Item</button>
                </div>
                <div className='item-content__item-list'>
                    <ul>
                        { this.props.itemList.map(item => 
                            <Item key={item.id} item={item} removeItem={this.removeItem(item)}/>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    itemList: state.itemList
})

const mapActionToProps = (dispatch: any) => ({
    actions: bindActionCreators({ addItem, removeItem }, dispatch)
})

export default connect(mapStateToProps, mapActionToProps)(ItemList);