import React, {useState, memo, forwardRef, useCallback, useRef, useMemo, useEffect} from 'react';
import { Image as RNImage } from 'react-native';
import Text from '../Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IImageProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { makeStyledComponent } from '../../../utils/styled';

const StyledImage = makeStyledComponent(RNImage);

const Image = (props: IImageProps, ref: any) => {
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

  const [alternate, setAlternate] = useState(false);
  const [fallbackSourceFlag, setfallbackSourceFlag] = useState(true);

  const getSource = useCallback(() => {
    if (source) {
      return source;
    } else if (src) {
      return { uri: src };
    }
    return undefined
  }, [source, src])

  const [renderedSource, setSource] = useState(getSource)

  useEffect(() => {
    const result = getSource()

    if (result && JSON.stringify(result ?? {}) !== JSON.stringify(renderedSource ?? {})) {
      setSource(result)
    }
  }, [getSource, renderedSource, setSource])

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
};

export default memo(forwardRef(Image));
export type { IImageProps };
