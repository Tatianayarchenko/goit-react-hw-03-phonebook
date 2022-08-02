// import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../ui/Button.styled';
import { InputForm } from '../ui/Input.styled';
import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup
    .string()
    .required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .number()
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">
          Name
          <InputForm type="text" name="name" />
          <ErrorMessage component="div" name="name" />
        </label>
        <br />
        <label htmlFor="number">
          Number
          <InputForm type="tel" name="number" />
          <ErrorMessage component="p" name="number" />
        </label>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
