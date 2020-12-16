export type ColorMode = 'light' | 'dark';
export interface StorageManager {
  get(init?: ColorMode): ColorMode | undefined;
  set(value: ColorMode): void;
}
