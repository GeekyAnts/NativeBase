import React, { useState, memo, forwardRef } from 'react';
import { Image as RNImage } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space, position } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customPosition,
} from '../../../utils/customProps';
import Text from '../Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IImageProps } from './types';

const StyledImage = styled(RNImage)<IImageProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);

const Image = ({ source, ...props }: IImageProps, ref: any) => {
  const {
    alt,
    fallbackSource,
    ignoreFallback,
    _alt,
    ...newProps
  } = usePropsResolution('Image', props);
  const [renderedSource, setSource] = useState(source);
  const [alternate, setAlternate] = useState(false);

  React.useEffect(() => {
    setAlternate(false);
    setSource(source);
  }, [source]);

  const onImageLoadError = (event: any) => {
    console.warn(event.nativeEvent.error);
    if (
      !ignoreFallback &&
      fallbackSource &&
      fallbackSource !== renderedSource
    ) {
      setSource(fallbackSource);
    } else {
      setAlternate(true);
    }
  };

  if (!alt) {
    console.warn('Please pass alt prop to Image component');
  }

  if (alternate) {
    return <Text {..._alt}>{alt}</Text>;
  }
  return (
    <StyledImage
      source={renderedSource}
      accessibilityLabel={alt}
      alt={alt}
      {...newProps}
      onError={props.onError ? props.onError : onImageLoadError}
      ref={ref}
    />
  );
};

export default memo(forwardRef(Image));
export type { IImageProps };
