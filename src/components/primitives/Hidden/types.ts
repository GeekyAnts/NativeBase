type LiteralUnion<T extends U, U = string> = T | (U & {});

export interface IHiddenProps {
  /**
   * The up of the hidden.
   */
  from?: LiteralUnion<'base' | 'sm' | 'md' | 'lg' | 'xl'>;
  /**
   * The down of the hidden.
   */
  till?: LiteralUnion<'base' | 'sm' | 'md' | 'lg' | 'xl'>;
  /**
   * The only of the hidden.
   */
  only?:
    | LiteralUnion<'base' | 'sm' | 'md' | 'lg' | 'xl'>
    | Array<LiteralUnion<'base' | 'sm' | 'md' | 'lg' | 'xl'>>;
  /**
   * The colormode of the hidden.
   */
  colorMode?: 'light' | 'dark';
  /**
   * The platform of the hidden.
   */
  platform?:
    | LiteralUnion<'ios' | 'android' | 'web'>
    | Array<LiteralUnion<'ios' | 'android' | 'web'>>;
  /**
   *
   */
  children: React.ReactElement | null;
}
