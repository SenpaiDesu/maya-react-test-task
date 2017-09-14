import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import { List } from 'immutable';

import * as e from './types';

//  hard code
const defaultState = List([
  {
    id: 1,
    title: 'Steins Gate',
    description: 'Probably, my favorite anime',
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 2,
    title: 'Another',
    description: 'Just good anime',
    createdAt: new Date().toLocaleString(),
  },
]);

const TodoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case e.ITEM_CREATED: {
      return state.push({
        ...action.item,
        id: state.count,
      });
    }
    case e.ITEM_UPDATED: {
      return state.update(action.id, item => ({
        ...item,
        ...action.data,
      }));
    }
    case e.ITEM_DELETED: {
      return state.delete(action.id);
    }
    default: return state;
  }
};

export default combineReducers({
  todoList: TodoReducer,
  form: reducer
})

