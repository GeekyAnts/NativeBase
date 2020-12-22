import React, { useState } from 'react';
import { Image as RNImage } from 'react-native';
import type { Image as ImageType } from 'react-native';
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
import { usePropsConfig } from '../../../hooks';
import type { IImageProps } from './props';

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

const Image = (
  {
    style,
    alt,
    fallbackSource,
    source,
    ignoreFallback,
    textProps,
    ...props
  }: IImageProps,
  ref: any
) => {
  let [renderedSource, setSource] = useState(source);
  let [alternate, setAlternate] = useState(false);
  let onImageLoadError = (event: any) => {
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
  const newProps = usePropsConfig('Image', props);

  if (!alt) {
    console.warn('Please pass alt prop to Image component');
  }

  if (alternate) {
    return <Text {...textProps}>{alt}</Text>;
  }
  return (
    <StyledImage
      style={style}
      source={renderedSource}
      maxWidth="100%"
      // height='100%'
      // width="auto"
      size={'100%'}
      accessibilityLabel={alt}
      accessibilityRole="image"
      accessible
      alt={alt}
      {...newProps}
      onError={props.onError ? props.onError : onImageLoadError}
      ref={ref}
    />
  );
};

export default React.forwardRef<ImageType, IImageProps>(Image);
export type { IImageProps };
