import type React from 'react';
import { useScreenReaderEnabled } from '../../../hooks';

export function VisuallyHidden({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement | null {
  const screenReaderEnabled = useScreenReaderEnabled();

  return screenReaderEnabled ? children : null;
}
