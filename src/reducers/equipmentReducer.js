import { fullEquipmentList } from '../data/db';

const initialState = fullEquipmentList.map((item, index) => {
  return {
    ...item,
    currentQuantity: 0,
    id: index + 1,
    missing: item.fullQuantity,
  };
});

export const equipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_QUANTITY':
      const { quantity, id } = action.payload;

      const copyState = state.slice();
      let updatedItem = copyState.find((item) => {
        return item.id === id;
      });
      updatedItem.currentQuantity = Number(quantity);
      updatedItem.missing =
        updatedItem.fullQuantity - updatedItem.currentQuantity;

      return [...copyState];
    case 'ADD_ITEM':
      const { name, fullQuantity, currentQuantity } = action.payload;
      const newState = state.slice();
      newState.push({
        name,
        fullQuantity,
        added: true,
        id: newState.length + 1,
        currentQuantity: Number(currentQuantity),
        missing: Number(fullQuantity) - Number(currentQuantity),
      });

      return [...newState];
    case 'DELETE_ITEM':
      const itemId = action.payload;
      const afterDeleteState = state.filter((item) => {
        return item.id !== itemId;
      });

      return [...afterDeleteState];
    case 'SEND_FORM':
      const afterSending = state.map((item) => {
        return { ...item, currentQuantity: 0, missing: item.fullQuantity };
      });

      return [...afterSending];
    default:
      return state;
  }
};
