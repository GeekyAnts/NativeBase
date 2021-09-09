import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import type { IListItemProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { mergeRefs } from '../../../utils';
import { Pressable } from '../Pressable';
// import { useHover } from '@react-native-aria/interactions';
import { extractInObject } from '../../../theme/tools';
import { composeEventHandlers } from '../../../utils';
import {
  useHover,
  useFocus,
  useIsPressed,
} from '../../primitives/Pressable/Pressable';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const ListItem = ({ children, ...props }: IListItemProps, ref: any) => {
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const {
    index,
    start,
    unordered,
    ul,
    ordered,
    ol,
    _text,
    borderTopWidth,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    ...resolvedProps
  } = usePropsResolution('ListItem', props, {
    isHovered,
    isPressed,
    isFocused,
  });
  const _ref = React.useRef(null);
  // const { isHovered } = useHover({}, _ref);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  // Extracting Pressable Props from resolvedProps
  const [
    pressableComponentProps,
    nonPressableProps,
  ] = extractInObject(resolvedProps, [
    'onPress',
    'unstable_pressDelay',
    'android_ripple',
    'android_disableSound',
    'delayLongPress',
    'hitSlop',
    'disabled',
    'onLongPress',
    'onPressIn',
    'onPressOut',
    'pressRetentionOffset',
    'testOnly_pressed',
    'onHoverIn',
    'onHoverOut',
    'onFocus',
    'onBlur',
    '_pressed',
    '_focus',
  ]);

  return Object.keys(pressableComponentProps).length !== 0 ? (
    // Checking if any Pressable Props present
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`List-Item-${index + start}`}
      flexDirection="row"
      alignItems="center"
      {...resolvedProps}
      onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
      onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
      // @ts-ignore - web only
      onFocus={composeEventHandlers(
        composeEventHandlers(onFocus, focusProps.onFocus)
        // focusRingProps.onFocu
      )}
      // @ts-ignore - web only
      onBlur={composeEventHandlers(
        composeEventHandlers(onBlur, focusProps.onBlur)
        // focusRingProps.onBlur
      )}
      borderTopWidth={index ? borderTopWidth : 0}
      ref={ref}
    >
      {/* {({ isPressed, isHovered, isFocusVisible }: any) => {
        const focusTextProps = isFocusVisible &&
          _focus?._text && { ..._focus._text };
        const hoverTextProps = isHovered &&
          _hover?._text && { ..._hover._text };
        const pressedTextProps = isPressed &&
          _pressed?._text && { ..._pressed._text };
        return ( */}
      <>
        <Box flexDirection="row" alignItems="center" pl={2}>
          {ul || unordered ? ( //Adding disc in front of ListItem
            <Box
              style={{ transform: [{ scale: 1.5 }] }}
              mr={2}
              // _text={{
              //   fontWeight: 'bold',
              //   ..._text,
              //   ...hoverTextProps,
              //   ...focusTextProps,
              //   ...pressedTextProps,
              // }}
            >
              •
            </Box>
          ) : null}
          {ol || ordered ? ( //Adding index number in front of ListItem
            <Box
              mr={2}
              // _text={{
              //   fontWeight: 'bold',
              //   ..._text,
              //   ...hoverTextProps,
              //   ...focusTextProps,
              //   ...pressedTextProps,
              // }}
            >
              {index + start + '.'}
            </Box>
          ) : null}
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          // _text={{
          //   ..._text,
          //   ...hoverTextProps,
          //   ...focusTextProps,
          //   ...pressedTextProps,
          // }}
        >
          {children}
        </Box>
      </>
      {/* ); */}
      {/* }} */}
    </Pressable>
  ) : (
    // If no Pressable Props passed by user render Box instead of Pressable
    <Box
      accessibilityRole="text"
      accessibilityLabel={`List-Item-${index + start}`}
      flexDirection="row"
      alignItems="center"
      {...nonPressableProps}
      borderTopWidth={index ? borderTopWidth : 0}
      ref={mergeRefs([ref, _ref])}
      {...(isHovered && resolvedProps._hover)}
      {...(isPressed && resolvedProps._pressed)}
      {...(isFocused && resolvedProps._focus)}
    >
      <Box flexDirection="row" alignItems="center" pl={2}>
        {ul || unordered ? ( //Adding disc in front of ListItem
          <Box
            style={{ transform: [{ scale: 1.5 }] }}
            mr={2}
            _text={{ fontWeight: 'bold', ..._text }}
          >
            •
          </Box>
        ) : null}
        {ol || ordered ? ( //Adding index number in front of ListItem
          <Box mr={2} _text={{ fontWeight: 'bold', ..._text }}>
            {index + start + '.'}
          </Box>
        ) : null}
      </Box>
      <Box
        flex={1}
        flexDirection="row"
        alignItems="center"
        _text={
          _text
          // ...(isHovered && _hover?._text && { ..._hover._text }),
        }
      >
        {children}
      </Box>
    </Box>
  );
};

export default memo(forwardRef(ListItem));
