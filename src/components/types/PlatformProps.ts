//@ts-ignore
export interface PlatformProps<T> {
  /**
   * Props only for web
   */
  _web?: T;
  /**
   * Props only for ios
   */
  _ios?: T;
  /**
   * Props only for android
   */
  _android?: T;
  /**
   * Props only for light mode
   */
  _light?: T;
  /**
   * Props only for dark mode
   */
  _dark?: T;
}
