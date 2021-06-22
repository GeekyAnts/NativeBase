import { Input, Button, FormControl } from 'native-base';
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

export const Example = () => {
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
        <FormControl.Label>First Name</FormControl.Label>
        <Input
          p={2}
          placeholder="John"
          onChangeText={handleChange('firstName')}
        />
        <FormControl.ErrorMessage>{errors.firstName}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl>
        <FormControl.Label>Last Name</FormControl.Label>
        <Input
          p={2}
          placeholder="Doe"
          onChangeText={handleChange('lastName')}
        />
      </FormControl>

      <FormControl isRequired isInvalid={'email' in errors}>
        <FormControl.Label>Email</FormControl.Label>
        <Input
          p={2}
          placeholder="jon.doe@abc.com"
          onChangeText={handleChange('email')}
        />
        <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
      </FormControl>

      <Button onPress={() => handleSubmit}>Submit</Button>
    </>
  );
};
