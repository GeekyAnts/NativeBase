import React, { useState, memo, forwardRef, useCallback, useRef } from 'react';
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

const Image = (
  { source, src, fallbackElement, ...props }: IImageProps,
  ref: any
) => {
  const {
    alt,
    fallbackSource,
    ignoreFallback,
    _alt,
    ...newProps
  } = usePropsResolution('Image', props);
  const finalSource: any = useRef(null);
  const getSource = useCallback(() => {
    if (source) {
      finalSource.current = source;
    } else if (src) {
      finalSource.current = { uri: src };
    }
    return finalSource.current;
  }, [source, src]);

  const [renderedSource, setSource] = useState(getSource());
  const [alternate, setAlternate] = useState(false);
  const [fallbackSourceFlag, setfallbackSourceFlag] = useState(true);

  React.useEffect(() => {
    setAlternate(false);
    setSource(getSource());
    return () => {
      setfallbackSourceFlag(true);
      finalSource.current = null;
    };
  }, [source, src, getSource]);

  const onImageLoadError = useCallback(
    (event: any) => {
      props.onError && props.onError(event);
      console.warn(event.nativeEvent.error);
      if (
        !ignoreFallback &&
        fallbackSource &&
        fallbackSource !== renderedSource &&
        fallbackSourceFlag
      ) {
        setfallbackSourceFlag(false);
        setSource(fallbackSource);
      } else {
        setAlternate(true);
      }
    },
    [fallbackSource, fallbackSourceFlag, ignoreFallback, props, renderedSource]
  );
  if (!alt) {
    console.warn('Please pass alt prop to Image component');
  }

  if (alternate) {
    if (fallbackElement) {
      if (React.isValidElement(fallbackElement)) {
        fallbackElement = React.Children.map(
          fallbackElement,
          (child: JSX.Element, index: number) => {
            return React.cloneElement(child, {
              key: `button-end-icon-${index}`,
              ...child.props,
            });
          }
        );
        return fallbackElement;
      } else {
        return <Text>{fallbackElement}</Text>;
      }
    } else return <Text {..._alt}>{alt}</Text>;
  }
  return (
    <StyledImage
      source={renderedSource}
      accessibilityLabel={alt}
      alt={alt}
      {...newProps}
      onError={onImageLoadError}
      ref={ref}
    />
  );
};

export default memo(forwardRef(Image));
export type { IImageProps };
