export type ResponsiveValue<T> =
  | T
  | null
  | undefined
  | Array<T | null>
  | { [key in string | number]?: T };
