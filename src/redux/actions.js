import * as e from './types';

export const createItem = data => {
  return {
    type: e.ITEM_CREATED,
    item: {
      ...data,
      createdAt: new Date().toLocaleString()
    }
  }
}

export const updateItem = (id, data) => {
  return {
    type: e.ITEM_UPDATED,
    id,
    data
  }
}

export const deleteItem = id => {
  return {
    type: e.ITEM_DELETED,
    id
  }
}