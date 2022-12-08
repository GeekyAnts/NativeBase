type LiteralUnion<T extends U, U = string> = T | (U & {});

export interface InterfaceHiddenProps {
  /**
   * The from prop takes breakpoint from which the wrapped component is hidden.
   */
  from?: LiteralUnion<'base' | 'sm' | 'md' | 'lg' | 'xl'>;
  /**
   * The till prop takes breakpoint till which the wrapped component is hidden.
   */
  till?: LiteralUnion<'base' | 'sm' | 'md' | 'lg' | 'xl'>;
  /**
   * The only prop takes array of breakpoints on which the wrapped component is hidden.
   * It hides the component starting from that breakpoint to the next breakpoint.
   */
  only?:
    | LiteralUnion<'base' | 'sm' | 'md' | 'lg' | 'xl'>
    | Array<LiteralUnion<'base' | 'sm' | 'md' | 'lg' | 'xl'>>;
  /**
   * The colormode takes the mode on which the wrapped component must be hidden.
   */
  colorMode?: 'light' | 'dark';
  /**
   * The platform takes the platform as string or array for the multiple on which the wrapped component must be hidden.
   */
  platform?:
    | LiteralUnion<'ios' | 'android' | 'web'>
    | Array<LiteralUnion<'ios' | 'android' | 'web'>>;
  /**
   *
   */
  children: React.ReactElement | null;
  /**
   *
   */
  isSSR?: boolean;
}

export type IHiddenProps = InterfaceHiddenProps;
