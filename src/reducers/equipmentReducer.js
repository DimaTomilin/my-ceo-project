import { fullEquipmentList } from '../data/db';

const initialState = fullEquipmentList.map((item, index) => {
  return {
    ...item,
    currentQuantity: 0,
    id: index + 1,
    missing: item.fullQuantity,
  };
});

export const cityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_QUANTITY':
      const { quantity, id } = action.payload;

      const copyState = state.slice();
      let updatedItem = copyState.find((item) => {
        return item.id === id;
      });
      updatedItem.currentQuantity = quantity;
      updatedItem.missing =
        updatedItem.fullQuantity - updatedItem.currentQuantity;

      console.log(updatedItem);
      return { ...copyState };
    case 'ADD_ITEM':
      const { name, fullQuantity, currentQuantity } = action.payload;
      const newState = state.slice();
      newState.push({
        name,
        fullQuantity,
        id: newState.length + 1,
        currentQuantity: currentQuantity,
        missing: fullQuantity - currentQuantity,
      });
      console.log(newState);
      return { ...newState };
    case 'SEND_FORM':
      const afterSending = state.map((item) => {
        return { ...item, currentQuantity: 0, missing: item.fullQuantity };
      });
      console.log(afterSending);
      return { ...afterSending };
    default:
      return state;
  }
};
