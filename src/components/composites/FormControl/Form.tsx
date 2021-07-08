import React, { memo, forwardRef, useState, useEffect } from 'react';
import type { IFormProps, IFormContext } from './types';
import { Button } from '../../primitives/Button';
import clonedeep from 'lodash.clonedeep';
import { FormContext } from './FormContext';
const Form = (props: IFormProps, ref: any) => {
  const stubFunc = (e: any) => {};
  const [refs, setRefs] = useState([]);
  const [counter, setCounter] = useState(0);
  const [currentFocused, setCurrentFocusedRef] = useState(null);
  const register = (childRef: any, id_id: any, test: any) => {
    // console.log('inside input');
    console.log('test => ', test);

    let temp: any = [];
    // console.log(refs.length, 'refs Length before'); //0
    // console.log(temp, 'temp length before'); //0
    temp = [...refs, { childRef, id_id }];
    // console.log(temp, 'temp length'); // 1
    setRefs(temp);
    // setTimeout(() => console.log(refs.length, 'refs Length')); // 0
  };
  const unRegister = () => {};
  // const focusNext = () => {
  //   setFocusRef(refs[1])
  // }
  const value: IFormContext = {
    onSubmit: props.onSubmit,
    refs,
    setRefs,
    register,
    unRegister,
    // @ts-ignore
    counter,
    setCounter,
  };
  useEffect(() => {
    console.log(refs.length, 'refs mounts form');
  }, [refs]);
  return (
    <FormContext.Provider value={value}>
      {props.children}
      <Button
        onPress={() => {
          // console.log(refs[0].childRef.current.focus());
          setCounter(counter + 1);
        }}
      >
        Log Refs
      </Button>
    </FormContext.Provider>
  );
};

export default memo(forwardRef(Form));
