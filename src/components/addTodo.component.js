import React, { Component } from 'react';
import { reduxForm, Field, reset } from 'redux-form';

import { createItem } from '../redux/actions';

const required = value => (value ? undefined : 'Required');

class AddTodoComponent extends Component {
  constructor(){
    super();
    this.onCreate = this.onCreate.bind(this);
  }

  onCreate(values){
    this.props.dispatch(createItem(values));
    this.props.dispatch(reset('addTodo'));
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
    return (
      <form className='add-item' onSubmit={this.props.handleSubmit(this.onCreate)}>
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
        <button className='add-btn' type='submit' disabled={submitting}>ADD ITEM</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'addItem'
})(AddTodoComponent);
