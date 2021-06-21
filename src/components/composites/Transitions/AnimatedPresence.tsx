import React from 'react';

export interface IAnimatedPresenceProps {
  children?: React.ReactElement | false;
}

export const AnimatedPresenceContext = React.createContext({
  setSafeToUnmount: (_value: boolean) => {},
  visible: false,
});

export function AnimatedPresence({ children }: IAnimatedPresenceProps) {
  const prevChildrenClone = React.useRef(children);
  const [safeToUnmount, setSafeToUnmount] = React.useState(!!children);
  const [visible, setVisible] = React.useState(!!children);

  React.useEffect(() => {
    if (children) {
      prevChildrenClone.current = React.cloneElement(children);
      setSafeToUnmount(false);
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [children, visible, setVisible]);

  return (
    <AnimatedPresenceContext.Provider value={{ setSafeToUnmount, visible }}>
      {!safeToUnmount && prevChildrenClone.current}
    </AnimatedPresenceContext.Provider>
  );
}
