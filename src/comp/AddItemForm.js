import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function AddItemForm() {
  const NameELe = useRef(null);
  const FullAmountEle = useRef(null);
  const CurrentAmountEle = useRef(null);
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        name: NameELe.current.value,
        fullQuantity: FullAmountEle.current.value,
        currentQuantity: CurrentAmountEle.current.value,
      },
    });
    NameELe.current.value = '';
    FullAmountEle.current.value = '';
    CurrentAmountEle.current.value = '';
  };

  return (
    <Container style={{ margin: '0 auto 70px', width: '80%' }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter item name"
            ref={NameELe}
          />
          <Form.Label>Full Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter full quantity"
            ref={FullAmountEle}
          />
          <Form.Label>Current Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter current quantity"
            ref={CurrentAmountEle}
          />
        </Form.Group>
        <Button variant="primary" onClick={addItem} className="form-btn">
          Create
        </Button>
      </Form>
    </Container>
  );
}
