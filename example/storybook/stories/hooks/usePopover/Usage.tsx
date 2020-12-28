import React from 'react';
import { Button, usePopover, Box } from 'native-base';

export default function () {
  const { setPopover } = usePopover();
  return (
    <>
      {[
        { top: 0, left: 0 },
        { top: 0, right: 0 },
        { bottom: 0, left: 0 },
        { bottom: 0, right: 0 },
        {},
      ].map((val, index: number) => {
        let buttonRef = React.useRef(null);
        return (
          <Button
            key={`usePopover-${index}`}
            position="absolute"
            colorScheme="teal"
            {...val}
            height={10}
            width={150}
            ref={buttonRef}
            onPress={() =>
              setPopover(<Box height={200} width={200} bg="lime.300" />, {
                triggerRef: buttonRef,
                animationDuration: 500,
                placeOverTriggerElement: false,
              })
            }
          >
            Show Overlay
          </Button>
        );
      })}
    </>
  );
}
