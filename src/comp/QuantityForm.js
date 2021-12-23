import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from './TableRow';
import { v4 as uuidv4 } from 'uuid';

export default function QuantityForm() {
  const { equipment, paramedic } = useSelector((state) => state);
  const dispatch = useDispatch();

  const sendForm = () => {
    dispatch({
      type: 'SEND_FORM',
      payload: {
        equipment,
        paramedic,
      },
    });
  };

  return (
    <Container style={{ margin: '0 auto', width: '80%' }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Full Quantity</th>
            <th style={{ width: '200px' }}>Current Quantity</th>
            <th>Missing</th>
            <th style={{ width: '50px' }}></th>
          </tr>
        </thead>
        <tbody>
          {equipment.map((item) => (
            <TableRow item={item} key={uuidv4()} />
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={sendForm} className="form-btn">
        Submit
      </Button>
    </Container>
  );
}
