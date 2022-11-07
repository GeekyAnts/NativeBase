//@ts-ignore
export interface PlatformProps<T> {
  /**
   * Props only for web
   */
  _web?: Partial<T>;
  /**
   * Props only for ios
   */
  _ios?: Partial<T>;
  /**
   * Props only for android
   */
  _android?: Partial<T>;
  /**
   * Props only for light mode
   */
  _light?: Partial<T>;
  /**
   * Props only for dark mode
   */
  _dark?: Partial<T>;
  /**
   * Props with highest specificity
   */
  _important?: Partial<T>;
}
