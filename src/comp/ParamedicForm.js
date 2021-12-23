import React, { useRef } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function ParamedicForm() {
  const FullNameELe = useRef(null);
  const WorkEle = useRef(null);
  const DateEle = useRef(null);

  const dispatch = useDispatch();

  const setUser = () => {
    console.log({
      fullName: FullNameELe.current.value,
      workPlace: WorkEle.current.value,
      date: DateEle.current.value,
    });
    dispatch({
      type: 'SET_USER',
      payload: {
        fullName: FullNameELe.current.value,
        workPlace: WorkEle.current.value,
        date: DateEle.current.value,
      },
    });
  };

  return (
    <Container style={{ margin: '0 auto', width: '80%' }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter fullname"
            ref={FullNameELe}
            onBlur={setUser}
          />
          <Form.Label>Work Place</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter work place"
            ref={WorkEle}
            onBlur={setUser}
          />
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="mm/dd/yyyy"
            ref={DateEle}
            onBlur={setUser}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}
