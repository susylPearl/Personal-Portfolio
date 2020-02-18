import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../store/actions/addOrRemoveAction';
import { fetchData } from '../store/actions/fetchItemAction';
import { Item } from './Item';
import ItemType from '../interfaces/ItemType';

type State = {
    item: ItemType,
}

type Props = {
    item: ItemType,
    itemList: Array<ItemType>,
    actions: {
        addItem: (value: ItemType) => void,
        removeItem: (value: ItemType) => void,
        fetchData: (value: void) => void
    }
}

class ItemList extends React.Component<Props, State> {
    state = {
        item: {
            userId: "",
            id: "",
            title: "",
            completed: false
        },
    }

    componentDidMount = () => {
        this.props.actions.fetchData();
    }

    handleChange = (e: any) => {
        this.setState({
            item: {
                ...this.state.item,
                [e.target.title]: e.target.value
            }
        });
    }

    addItem = () => {
        this.props.actions.addItem(this.state.item);
        this.setState({
            item: {
                userId: "",
                id: "",
                title: "",
                completed: false
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
                        value={this.state.item.title}
                        onChange={this.handleChange}
                        type="text"
                        title="title"
                    />
                    <button id='addBtn' onClick={this.addItem}>Add Item</button>
                </div>
                <div className='item-content__item-list'>
                    <ul>
                        { this.props.itemList.flat().map(item => 
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
    actions: bindActionCreators({ addItem, removeItem, fetchData }, dispatch)
})

export default connect(mapStateToProps, mapActionToProps)(ItemList);