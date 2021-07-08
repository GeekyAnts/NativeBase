import React, { memo, forwardRef, useState, useCallback } from 'react';
import type { IFormProps, IFormContext } from './types';
import { Button } from '../../primitives/Button';
import { FormContext } from './FormContext';

const Form = (props: IFormProps) => {
  const [refs, setRefs] = useState<Array<any>>([]);

  const register = useCallback(
    (ref: any) => {
      setRefs((prev) => [...prev, ref]);
    },
    [setRefs]
  );

  const unRegister = () => {};

  const value: IFormContext = {
    onSubmit: props.onSubmit,
    refs,
    setRefs,
    register,
    unRegister,
  };

  return (
    <FormContext.Provider value={value}>
      {props.children}
      <Button>Log Refs</Button>
    </FormContext.Provider>
  );
};

export default memo(forwardRef(Form));
