import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToDoComponent extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className='todo-list'>
        {
          this.props.state.map((item, index) => {
            return(
              <div className='todo-item'>
                <h3>{item.title}</h3>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default connect(state => ({
  state,
}))(ToDoComponent);
