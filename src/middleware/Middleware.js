import { alert } from '../helpers/alerts';

export const consoleMiddleware = (storeAPI) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
};

export const checkAvailableAmountMiddleware =
  (storeAPI) => (next) => (action) => {
    if (action.type === 'UPDATE_QUANTITY') {
      const { id, quantity } = action.payload;
      const itemToUpdate = storeAPI.getState().equipment.find((item) => {
        return item.id === id;
      });
      if (quantity > itemToUpdate.fullQuantity) {
        alert('Invalid amount ');
        return;
      }
      next(action);
    }
    next(action);
  };

export const checkDeleteMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === 'DELETE_ITEM') {
    const id = action.payload;
    const itemToDelete = storeAPI.getState().equipment.find((item) => {
      return item.id === id;
    });
    if (!itemToDelete.added) {
      alert('You can only delete items that you added!');
      return;
    }
    next(action);
  }
  next(action);
};
