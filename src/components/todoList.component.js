import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../redux/actions';

class TodoListComponent extends Component {
  constructor(){
    super();
    this.onDelete = this.onDelete.bind(this);
    this.filterList = this.filterList.bind(this);
    this.onFilterTitleChange = this.onFilterTitleChange.bind(this);
    this.onFilterDateChange = this.onFilterDateChange.bind(this);

    this.state = {
      title: '',
      createdAt: ''
    }
  }

  onDelete(id){
    this.props.dispatch(deleteItem(id));
  }

  onFilterTitleChange(e){
    this.setState({
      title: e.target.value
    })
  }

  onFilterDateChange(e){
    this.setState({
      date: e.target.value
    })
  }

  filterList(){
    let list = [];
    this.props.list.map((item, index) => {
      const inputTitle = this.state.title.toLowerCase();
      const itemTitle = item.title.toLowerCase() || '';
      const inputDate = this.state.createdAt.toLowerCase();
      const itemDate = item.createdAt.toLowerCase() || '';
      if (itemTitle.includes(inputTitle) && itemDate.includes(inputDate)) 
        list.push(
          <div className='todo-item' key={index}>
            <button className='close-btn' onClick={ () => { this.onDelete(index) }}>X</button>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Created at: {item.createdAt}</p>
          </div>
        );
    });
    return list;
  }

  render(){
    return (
      <div className='main'>
        <div className='todo-filter'>
          <input type="text" onChange={this.onFilterTitleChange} placeholder='Filter by title'/>
          <input type="text" onChange={this.onFilterDateChange} placeholder='filter by date'/>
        </div>
        <div className='todo-list'>
          { this.filterList() }
        </div>
      </div>
    );
  }
}

export default connect(state => ({ list: state.todoList }))(TodoListComponent);
