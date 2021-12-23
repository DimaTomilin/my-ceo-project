import React from 'react';
import { Container } from 'react-bootstrap';
import ParamedicForm from './ParamedicForm';
import QuantityForm from './QuantityForm';

export default function Main() {
  return (
    <Container className="main">
      <ParamedicForm />
      <br />
      <QuantityForm />
    </Container>
  );
}
