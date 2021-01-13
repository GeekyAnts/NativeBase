import styled from 'styled-components/native';
import { FlexboxProps, flexbox } from 'styled-system';
import { SafeAreaView as RNSafeAreaView, ViewProps } from 'react-native';
import { customBackground } from '../../../utils/customProps';
import type { customBackgroundProps } from '../../../utils/customProps';

export type IViewProps = ViewProps & FlexboxProps & customBackgroundProps;
const SafeAreaView: any = styled(RNSafeAreaView)<IViewProps>(
  flexbox,
  customBackground
);

export default SafeAreaView;
