import React, { useCallback } from 'react';

export function useDisclose(initState?: boolean) {
  const [isOpen, setIsOpen] = React.useState(initState || false);
  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onClose = useCallback(() => {
    setIsOpen(false);
  },[]);
  const onToggle = useCallback(() => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, []);
  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}
