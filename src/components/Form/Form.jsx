import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  FormFeedback,
  Button,
  Card,
  CardBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(values.phone)) { //eslint-disable-line
    errors.phone = 'Please enter a valid phone number';
  }
  // ZIP code validation rules
  // NOTE: googled this regex as well, not sure about format
  if (values.zip && !/^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/i.test(values.zip)) {
    errors.zip = 'Please enter a valid ZIP code';
  }
  return errors;
};

/* eslint-disable */
const renderField = ({
  input,
  label,
  type,
  meta: {
    touched,
    error,
  },
}) => (
  /* eslint-enable */
  <FormGroup>
    <Input
      {...input}
      placeholder={label}
      type={type}
      invalid={touched && Boolean(error)}
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
    handleSubmit,
    reset,
    onSubmit,
  } = props;
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Card className="border-0 shadow p-3 mb-5 bg-white rounded">
            <CardBody>
              <form
                onSubmit={handleSubmit((values) => {
                  onSubmit(values);
                  reset();
                })}
              >
                <Row>
                  <Col sm="12" md="6">
                    <Field name="name" type="text" component={renderField} label="Name" />
                  </Col>
                  <Col sm="12" md="6">
                    <Field name="surname" type="text" component={renderField} label="Surname" />
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="4">
                    <Field name="email" type="email" component={renderField} label="Email" />
                  </Col>
                  <Col sm="12" md="4">
                    <Field name="phone" type="text" component={renderField} label="Phone" />
                  </Col>
                  <Col sm="12" md="4">
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
                    <p className="text-right">
                      <small>
                        <Link to={{ state: { showModal: true } }}>
                          Show entries
                        </Link>
                      </small>
                    </p>
                  </Col>
                </Row>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

FormWithValidation.propTypes = {
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'onTheFlyValidationForm',
  validate,
})(FormWithValidation);
