import { createStore } from 'redux';

import TodoReducer from './reducer';

//  hard code
const defaultState = [
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
];

export default createStore(TodoReducer, defaultState);
