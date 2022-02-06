import React from 'react';

export function useDisclose(initState?: boolean) {
  const [isOpen, setIsOpen] = React.useState(initState || false);
  const onOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [])
  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, [])
  const onToggle = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen])

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}
