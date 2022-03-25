import React from "react";
import { Container, Button, Checkbox, Form } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Mesajiniz gönderildi");

const FormExampleForm = () => (
  <Container>
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button primary type="submit" onClick={notify}>
        Submit
      </Button>
      <ToastContainer></ToastContainer>
    </Form>
  </Container>
);

export default FormExampleForm;
