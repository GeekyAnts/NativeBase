import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from 'native-base';
import React from 'react';
import { useFormik, FormikErrors } from 'formik';

type IFormFields = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

function validateEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default function () {
  const formik = useFormik<IFormFields>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: async (values) => {
      console.log('Handle submit', values);
    },
    validate: (values) => {
      let errors: FormikErrors<IFormFields> = {};
      if (!values.firstName) {
        errors.firstName = 'Required';
      } else if (values.firstName.length > 15) {
        errors.firstName = 'Max allowed characters 15';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!validateEmail(values.email)) {
        errors.email = 'Please enter a valid email address';
      }

      return errors;
    },
  });
  const { handleChange, handleSubmit, errors, values } = formik;

  console.log(values);

  return (
    <>
      <FormControl isRequired isInvalid={'firstName' in errors}>
        <FormLabel>First Name</FormLabel>
        <Input
          p={2}
          placeholder="John"
          onChangeText={handleChange('firstName')}
        />
        <FormErrorMessage>{errors.firstName}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input
          p={2}
          placeholder="Doe"
          onChangeText={handleChange('lastName')}
        />
      </FormControl>

      <FormControl isRequired isInvalid={'email' in errors}>
        <FormLabel>Email</FormLabel>
        <Input
          p={2}
          placeholder="jon.doe@abc.com"
          onChangeText={handleChange('email')}
        />
        <FormErrorMessage>{errors.email}</FormErrorMessage>
      </FormControl>

      <Button onPress={handleSubmit}>Submit</Button>
    </>
  );
}
