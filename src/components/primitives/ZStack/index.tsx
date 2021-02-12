import React from 'react';
import { IViewProps, default as View } from '../View';
import styled from 'styled-components/native';
import { getAbsoluteChildren } from '../../../utils';

export type IZStackProps = IViewProps & {
  children: JSX.Element[] | JSX.Element;
  reversed?: boolean;
};

const StyledZStack = styled(View)<IZStackProps>({});

const ZStack = ({ children, reversed, ...props }: IZStackProps, ref?: any) => {
  return (
    <StyledZStack {...props} ref={ref}>
      {getAbsoluteChildren(children, reversed)}
    </StyledZStack>
  );
};

export default React.memo(React.forwardRef(ZStack));
