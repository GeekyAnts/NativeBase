import React, { useState, memo, forwardRef, useCallback, useRef } from 'react';
import { Image as RNImage } from 'react-native';
import Text from '../Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IImageProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { makeStyledComponent } from '../../../utils/styled';

const StyledImage = makeStyledComponent(RNImage);

const Image = memo(
  forwardRef((props: IImageProps, ref: any) => {
    const {
      source,
      src,
      fallbackElement,
      alt,
      fallbackSource,
      ignoreFallback,
      _alt,
      ...resolvedProps
    } = usePropsResolution('Image', props);

    const finalSource: any = useRef(null);
    const getSource = useCallback(() => {
      if (source) {
        finalSource.current = source;
      } else if (src) {
        finalSource.current = { uri: src };
      }
      return finalSource.current;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [source?.uri, src]);

    const [renderedSource, setSource] = useState(getSource());
    const [alternate, setAlternate] = useState(false);
    const [fallbackSourceFlag, setfallbackSourceFlag] = useState(true);

    React.useEffect(() => {
      setSource(getSource());
      return () => {
        finalSource.current = null;
      };
    }, [source?.uri, src, getSource]);

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
      [
        fallbackSource,
        fallbackSourceFlag,
        ignoreFallback,
        props,
        renderedSource,
      ]
    );
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }
    if (!alt) {
      console.warn('Please pass alt prop to Image component');
    }

    if (alternate) {
      if (fallbackElement) {
        if (React.isValidElement(fallbackElement)) {
          return fallbackElement;
        }
      } else return <Text {..._alt}>{alt}</Text>;
    }
    return (
      <StyledImage
        source={renderedSource}
        accessibilityLabel={alt}
        alt={alt}
        {...resolvedProps}
        onError={onImageLoadError}
        ref={ref}
      />
    );
  })
);

interface ImageStatics {
  getSize: typeof RNImage.prefetch;
  prefetch: typeof RNImage.prefetch;
  queryCache: typeof RNImage.queryCache;
}
const ImageWithStatics: typeof Image & ImageStatics = {
  ...Image,
  //@ts-ignore
  getSize: RNImage.getSize,
  prefetch: RNImage.prefetch,
  queryCache: RNImage.queryCache,
};

export default ImageWithStatics;
export type { IImageProps };
