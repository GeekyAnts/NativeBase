import { getStyleAndFilteredProps } from '../theme/styled-system';
import styled from 'styled-components/native';

export const makeStyledBox = (Comp: any) =>
  styled(Comp)(getStyleAndFilteredProps);
