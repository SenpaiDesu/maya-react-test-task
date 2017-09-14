import { List } from 'immutable';

import * as e from './types';

export default (state = List(), action) => {
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
      return state.remove(action.id);
    }
    default: return state;
  }
};
