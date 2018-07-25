import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  FormFeedback,
  Button,
} from 'reactstrap';

const validate = (values) => {
  const errors = {};
  // Name validation rules
  if (!values.name) {
    errors.name = 'Name is required';
  }
  // Surname validation rules
  if (!values.surname) {
    errors.surname = 'Surname is required';
  }
  // Email validation rules
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }
  // Address validation rules
  if (!values.address) {
    errors.address = 'Address is required';
  }
  // Phone number validation rules
  // NOTE: googled this regex as am not sure about German phone format
  if (!values.phone) {
    errors.phone = 'Phone number is required';
  } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  // ZIP code validation rules
  // NOTE: googled this regex as well, not sure about format
  if (values.zip && !/^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/i.test(values.zip)) {
    errors.zip = 'Please enter a valid ZIP code';
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: {
    touched,
    error
  }
}) => (
  <FormGroup>
    <Input
      {...input}
      bsSize="lg"
      placeholder={label}
      type={type}
      invalid={touched && error}
    />
    <FormFeedback>
      {error}
    </FormFeedback>
  </FormGroup>
);

const FormWithValidation = (props) => {
  const {
    pristine,
    invalid,
  } = props;
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Form>
            <Row>
              <Col>
                <Field name="name" type="text" component={renderField} label="Name" />
              </Col>
              <Col>
                <Field name="surname" type="text" component={renderField} label="Surname" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Field name="email" type="email" component={renderField} label="Email" />
              </Col>
              <Col>
                <Field name="phone" type="text" component={renderField} label="Phone" />
              </Col>
              <Col>
                <Field name="zip" type="text" component={renderField} label="ZIP code" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Field name="address" type="textarea" component={renderField} label="Address" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  block
                  size="lg"
                  color="primary"
                  disabled={pristine || invalid}
                >
                  Submit
                </Button>
                <Link to={{ state: { showModal: true } }}>
                  Show entries
                </Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default reduxForm({
  form: 'onTheFlyValidationForm',
  validate,
})(FormWithValidation);
