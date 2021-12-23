import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

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
          onChange={setQuantity}
        />
      </td>
      <td>{item.missing}</td>
    </tr>
  );
}
