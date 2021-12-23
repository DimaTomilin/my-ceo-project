import React from 'react';
import { Container } from 'react-bootstrap';
import ParamedicForm from './ParamedicForm';
import QuantityForm from './QuantityForm';
import AddItemForm from './AddItemForm';

export default function Main() {
  return (
    <Container>
      <ParamedicForm />
      <br />
      <QuantityForm />
      <br />
      <AddItemForm />
    </Container>
  );
}
