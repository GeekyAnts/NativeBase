import React, { memo, forwardRef } from 'react';
import type { IFormProps } from './types';

const Form = (props: IFormProps, ref: any) => {
  const stubFunc = (e: any) => {};
  // const formChildren = React.Children.map(props.children, (child: any) => {
  //   return React.cloneElement(
  //     child,
  //     {
  //       ...child.props,
  //       onKeyPress: (e: any) => {
  //         child.props.onKeyPress(e);
  //         e.continuePropagation();
  //       },
  //     },
  //     child.props.children
  //   );
  // });
  return (
    <form
      ref={ref}
      onSubmit={props.onSubmit ?? stubFunc}
      onKeyPress={(e) => {
        e.stopPropagation();
      }}
    >
      {/* {formChildren} */}
      {props.children}
      {/* <Button></Button> */}
      <button type="submit" hidden>
        Submit
      </button>
    </form>
  );
};

export default memo(forwardRef(Form));
