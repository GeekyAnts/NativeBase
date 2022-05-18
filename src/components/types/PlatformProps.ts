//@ts-ignore
export interface PlatformProps<T> {
  /**
   * Props only for web
   */
  _web?: Omit<Partial<T>, '_web' | '_ios' | '_android'>;
  /**
   * Props only for ios
   */
  _ios?: Omit<Partial<T>, '_web' | '_ios' | '_android'>;
  /**
   * Props only for android
   */
  _android?: Omit<Partial<T>, '_web' | '_ios' | '_android'>;
  /**
   * Props only for light mode
   */
  _light?: Omit<Partial<T>, '_light'>;
  /**
   * Props only for dark mode
   */
  _dark?: Omit<Partial<T>, '_dark'>;
  /**
   * Props with highest specificity
   */
  _important?: Omit<Partial<T>, '_important'>;
}
