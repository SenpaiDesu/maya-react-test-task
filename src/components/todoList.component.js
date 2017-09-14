import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../redux/actions';
import TodoItem from './todoItem.component';

class TodoListComponent extends Component {
  constructor(){
    super();
    this.filterList = this.filterList.bind(this);
    this.onFilterTitleChange = this.onFilterTitleChange.bind(this);
    this.onFilterDateChange = this.onFilterDateChange.bind(this);

    this.state = {
      title: '',
      createdAt: '',
    }
  }

  onFilterTitleChange(e){
    this.setState({
      title: e.target.value
    })
  }

  onFilterDateChange(e){
    this.setState({
      createdAt: e.target.value
    })
  }

  filterList(){
    return this.props.list.filter(item => {
      return item.title.toLowerCase().indexOf(this.state.title.toLowerCase()) !== -1 &&
        item.createdAt.indexOf(this.state.createdAt) !== -1;
    });
  }

  toggleTypingMode(){
    this.setState({ isTypingMode: !this.state.isTypingMode });

  }

  render(){
    let template = [];
    this.filterList().map((item, index) => {
      template.push(
        <TodoItem index={index} data={item} key={index} />
      );
    });
    
    return (
      <div className='main'>
        <div className='todo-filter'>
          <input type="text" onChange={this.onFilterTitleChange} placeholder='Filter by title'/>
          <input type="text" onChange={this.onFilterDateChange} placeholder='filter by date'/>
        </div>
        <div className='todo-list'>
          {template}
        </div>
      </div>
    );
  }
}

export default connect(state => ({ list: state.todoList }))(TodoListComponent);
