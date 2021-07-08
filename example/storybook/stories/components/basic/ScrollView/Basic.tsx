import React from 'react';
import { Form, Input } from 'native-base';

export const Example = () => {
  return (
    <Form
      onSubmit={() => {
        alert('Submitted');
      }}
    >
      <Input />
      <Input />
      <Input />
    </Form>
  );
};
