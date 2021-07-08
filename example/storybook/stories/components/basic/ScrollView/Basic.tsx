import React from 'react';
import { Form, Input, Center, Button } from 'native-base';

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
