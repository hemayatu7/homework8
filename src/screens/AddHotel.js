import { Form, Container } from "react-bootstrap";
import React from "react";

const AddHotel = () => {
  return (
    <Container>
      <Form>
        <Form.Control placeholder="enter your location"></Form.Control>
        <Form.Control placeholder="enter your type"></Form.Control>
        <Form.Control placeholder="enter your name"></Form.Control>
        <Form.Control placeholder="enter your contact"></Form.Control>
        <button>ADD</button>
      </Form>
    </Container>
  );
};
export default AddHotel;
