import React from 'react';
import { useOverlay as useOverlayWeb } from '@react-aria/overlays';


function useOverlay() {
  let __ref = React.useRef(null);
  return useOverlayWeb({}, __ref).overlayProps;

}
export { useOverlay }