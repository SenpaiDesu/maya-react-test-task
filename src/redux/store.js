import { createStore } from 'redux';
import { List } from 'immutable';

import reducer from './reducer';

export default createStore(reducer);
