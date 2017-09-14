import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { deleteItem, updateItem } from '../redux/actions';

const required = value => (value ? undefined : 'Required');

class TodoItemComponent extends Component {
  constructor(props){
    super(props);
    this.toggleMode = this.toggleMode.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      isTypingMode: false,
    }
  }
  
  toggleMode(){
    this.setState({ isTypingMode: !this.state.isTypingMode });
    console.log(this.state.isTypingMode);
  }

  onUpdate(values){
    this.props.dispatch(updateItem(this.props.index, values));
    this.toggleMode();
  }

  renderField({ input, label, meta: { touched, error } }){
    return (
      <div>
        <input {...input} placeholder={label} />
        { touched && error && <span className='error-msg'>{error}</span> }
      </div>
    )
  }
  
  render(){
    const { handleSubmit, submitting } = this.props;
    if (!this.state.isTypingMode)
      return (
        <div className='todo-item'>
          <button className='close-btn' onClick={ () => { this.props.dispatch(deleteItem(this.props.index)) }}>X</button>
          <h3>{this.props.data.title}</h3>
          <p>{this.props.data.description}</p>
          <p>Created at: {this.props.data.createdAt}</p>
          <button className='update-btn' onClick={this.toggleMode}>CHANGE ITEM</button>
        </div>
      )
    else return (
      <form className='add-item' onSubmit={this.props.handleSubmit(this.onUpdate)}>
        <Field 
          name='title' 
          component={this.renderField}
          validate={[required]} 
          type='text' 
          label='Title..' 
        />
        <Field 
          name='description' 
          component={this.renderField}
          type='text' 
          label='Description..' 
        />
        <button 
          className='update-btn' 
          type='submit' 
          disabled={submitting} 
        >
          UPDATE ITEM
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'updateItem'
})(TodoItemComponent);