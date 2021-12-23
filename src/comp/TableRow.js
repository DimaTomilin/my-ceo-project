import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';

export default function TableRow({ item }) {
  const CurrentAmountELe = useRef(null);
  const dispatch = useDispatch();

  const setQuantity = () => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: item.id,
        quantity: CurrentAmountELe.current.value,
      },
    });
  };

  const deleteItem = () => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: item.id,
    });
  };

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.fullQuantity}</td>
      <td>
        <input
          type="number"
          defaultValue={item.currentQuantity}
          ref={CurrentAmountELe}
          onBlur={setQuantity}
        />
      </td>
      <td>{item.missing}</td>
      <td>
        <MdDeleteForever
          style={{ fontSize: '25px', color: 'red' }}
          onClick={deleteItem}
        />
      </td>
    </tr>
  );
}
