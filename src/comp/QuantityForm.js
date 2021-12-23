import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';
import { v4 as uuidv4 } from 'uuid';

export default function QuantityForm() {
  const equipment = useSelector((state) => {
    return state.equipment;
  });

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
          </tr>
        </thead>
        <tbody>
          {equipment.map((item) => (
            <TableRow item={item} key={uuidv4()} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
